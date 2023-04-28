import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';

import { ProtoGrpcType } from '../proto/random';

const PORT = 8082;
const PROTO_FILE = '../proto/random.proto';

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE)
);

export const grpcObject = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const client = new grpcObject.dev.dgvalerio.ufal.Random(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure()
);

const deadline = new Date();

deadline.setSeconds(deadline.getSeconds() + 5);

const onClientReady = (): void => {
  client.PingPong({ message: 'ping' }, (err: any, res: any) => {
    if (err) {
      console.error(err);

      return;
    }

    console.log({ res });
  });
};

client.waitForReady(deadline, (err: any) => {
  if (err) {
    console.error(err);

    return;
  }

  onClientReady();
});
