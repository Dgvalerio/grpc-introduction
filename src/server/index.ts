import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';

import { RandomHandlers } from '../proto/dev/dgvalerio/ufal/Random';
import { ProtoGrpcType } from '../proto/random';

const PORT = 8082;

const PROTO_FILE = '../proto/random.proto';

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE)
);

export const grpcObject = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const randomPackage = grpcObject.dev.dgvalerio.ufal;

const getServer = (): grpc.Server => {
  const server = new grpc.Server();

  server.addService(randomPackage.Random.service, {
    PingPong: (req, res) => {
      console.log(req.request);

      res(null, { message: 'Pong' });
    },
  } as RandomHandlers);

  return server;
};

const main = (): void => {
  const server = getServer();

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);

        return;
      }

      console.log(`gRPC listening on 0.0.0.0:${port}`);
      server.start();
    }
  );
};

main();
