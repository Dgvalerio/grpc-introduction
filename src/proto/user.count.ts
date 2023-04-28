import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type {
  UserClient as _dev_dgvalerio_ufal_UserClient,
  UserDefinition as _dev_dgvalerio_ufal_UserDefinition,
} from './dev/dgvalerio/ufal/User';

interface SubtypeConstructor<
  Constructor extends new (...args: any) => any,
  Subtype
> {
  new (...args: ConstructorParameters<Constructor>): Subtype;
}

export interface ProtoGrpcType {
  dev: {
    dgvalerio: {
      ufal: {
        Request: MessageTypeDefinition;
        Response: MessageTypeDefinition;
        User: SubtypeConstructor<
          typeof grpc.Client,
          _dev_dgvalerio_ufal_UserClient
        > & { service: _dev_dgvalerio_ufal_UserDefinition };
      };
    };
  };
}
