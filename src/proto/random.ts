import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RandomClient as _dev_dgvalerio_ufal_RandomClient, RandomDefinition as _dev_dgvalerio_ufal_RandomDefinition } from './dev/dgvalerio/ufal/Random';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  dev: {
    dgvalerio: {
      ufal: {
        PingRequest: MessageTypeDefinition
        PingResponse: MessageTypeDefinition
        Random: SubtypeConstructor<typeof grpc.Client, _dev_dgvalerio_ufal_RandomClient> & { service: _dev_dgvalerio_ufal_RandomDefinition }
      }
    }
  }
}

