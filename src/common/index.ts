import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

import { ProtoGrpcType } from '../proto/random';

export const PORT = 8082;
export const PROTO_FILE = '../proto/random.proto';

export const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE)
);

export const grpcObject = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;
