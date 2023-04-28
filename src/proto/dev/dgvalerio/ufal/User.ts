// Original file: src/proto/user.count.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';

import type {
  Request as _dev_dgvalerio_ufal_Request,
  Request__Output as _dev_dgvalerio_ufal_Request__Output,
} from '../../../dev/dgvalerio/ufal/Request';
import type {
  Response as _dev_dgvalerio_ufal_Response,
  Response__Output as _dev_dgvalerio_ufal_Response__Output,
} from '../../../dev/dgvalerio/ufal/Response';

export interface UserClient extends grpc.Client {
  CountRepositories(
    argument: _dev_dgvalerio_ufal_Request,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_dev_dgvalerio_ufal_Response__Output>
  ): grpc.ClientUnaryCall;
  CountRepositories(
    argument: _dev_dgvalerio_ufal_Request,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_dev_dgvalerio_ufal_Response__Output>
  ): grpc.ClientUnaryCall;
  CountRepositories(
    argument: _dev_dgvalerio_ufal_Request,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_dev_dgvalerio_ufal_Response__Output>
  ): grpc.ClientUnaryCall;
  CountRepositories(
    argument: _dev_dgvalerio_ufal_Request,
    callback: grpc.requestCallback<_dev_dgvalerio_ufal_Response__Output>
  ): grpc.ClientUnaryCall;
  countRepositories(
    argument: _dev_dgvalerio_ufal_Request,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_dev_dgvalerio_ufal_Response__Output>
  ): grpc.ClientUnaryCall;
  countRepositories(
    argument: _dev_dgvalerio_ufal_Request,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_dev_dgvalerio_ufal_Response__Output>
  ): grpc.ClientUnaryCall;
  countRepositories(
    argument: _dev_dgvalerio_ufal_Request,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_dev_dgvalerio_ufal_Response__Output>
  ): grpc.ClientUnaryCall;
  countRepositories(
    argument: _dev_dgvalerio_ufal_Request,
    callback: grpc.requestCallback<_dev_dgvalerio_ufal_Response__Output>
  ): grpc.ClientUnaryCall;
}

export interface UserHandlers extends grpc.UntypedServiceImplementation {
  CountRepositories: grpc.handleUnaryCall<
    _dev_dgvalerio_ufal_Request__Output,
    _dev_dgvalerio_ufal_Response
  >;
}

export interface UserDefinition extends grpc.ServiceDefinition {
  CountRepositories: MethodDefinition<
    _dev_dgvalerio_ufal_Request,
    _dev_dgvalerio_ufal_Response,
    _dev_dgvalerio_ufal_Request__Output,
    _dev_dgvalerio_ufal_Response__Output
  >;
}
