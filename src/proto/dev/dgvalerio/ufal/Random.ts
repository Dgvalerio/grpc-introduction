// Original file: src/proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _dev_dgvalerio_ufal_PingRequest, PingRequest__Output as _dev_dgvalerio_ufal_PingRequest__Output } from '../../../dev/dgvalerio/ufal/PingRequest';
import type { PingResponse as _dev_dgvalerio_ufal_PingResponse, PingResponse__Output as _dev_dgvalerio_ufal_PingResponse__Output } from '../../../dev/dgvalerio/ufal/PingResponse';

export interface RandomClient extends grpc.Client {
  PingPong(argument: _dev_dgvalerio_ufal_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dev_dgvalerio_ufal_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _dev_dgvalerio_ufal_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dev_dgvalerio_ufal_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _dev_dgvalerio_ufal_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dev_dgvalerio_ufal_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _dev_dgvalerio_ufal_PingRequest, callback: grpc.requestCallback<_dev_dgvalerio_ufal_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _dev_dgvalerio_ufal_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_dev_dgvalerio_ufal_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _dev_dgvalerio_ufal_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_dev_dgvalerio_ufal_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _dev_dgvalerio_ufal_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_dev_dgvalerio_ufal_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _dev_dgvalerio_ufal_PingRequest, callback: grpc.requestCallback<_dev_dgvalerio_ufal_PingResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_dev_dgvalerio_ufal_PingRequest__Output, _dev_dgvalerio_ufal_PingResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_dev_dgvalerio_ufal_PingRequest, _dev_dgvalerio_ufal_PingResponse, _dev_dgvalerio_ufal_PingRequest__Output, _dev_dgvalerio_ufal_PingResponse__Output>
}
