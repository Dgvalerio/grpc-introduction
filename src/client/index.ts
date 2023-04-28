import * as grpc from '@grpc/grpc-js';
import * as readline from 'readline';

import { grpcObject, PORT } from '../common';

const make = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new grpcObject.dev.dgvalerio.ufal.Random(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure()
);

const deadline = new Date();

deadline.setSeconds(deadline.getSeconds() + 5);

const onClientReady = (): void => {
  make.question('Informe o nome do repositório: \n-->', (input) => {
    client.PingPong({ message: input || '' }, (err: any, res: any) => {
      if (err) {
        console.error(err);

        return;
      }

      console.log(res);
    });
  });
};

client.waitForReady(deadline, (err: any) => {
  if (err) {
    console.error(err);

    return;
  }

  onClientReady();
});
