import * as grpc from '@grpc/grpc-js';
import * as readline from 'readline';

import { grpcObject, PORT } from '../common';
import { UserData } from '../server';

const make = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new grpcObject.dev.dgvalerio.ufal.User(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure()
);

const deadline = new Date();

deadline.setSeconds(deadline.getSeconds() + 5);

const onClientReady = (): void => {
  make.question('Informe o username do usuário: \n--> ', (input) => {
    console.log('\n');
    client.CountRepositories(
      { userName: input || '' },
      (err: any, res: any) => {
        if (err) {
          console.error(err);

          return;
        }

        const data = res as UserData;

        console.log(
          `O usuário "${input}" tem ${data.publicRepos} repositórios públicos, ${data.followers} seguidores e segue ${data.following} pessoas.\n\n`
        );
      }
    );
  });
};

client.waitForReady(deadline, (err: any) => {
  if (err) {
    console.error(err);

    return;
  }

  onClientReady();
});
