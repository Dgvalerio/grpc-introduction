import * as grpc from '@grpc/grpc-js';
import { Octokit } from 'octokit';

import { grpcObject, PORT } from '../common';
import { UserHandlers } from '../proto/dev/dgvalerio/ufal/User';

export interface UserData {
  publicRepos: string;
  followers: string;
  following: string;
}

const getUserData = async (username: string): Promise<UserData | undefined> => {
  try {
    const api = new Octokit();

    const { data } = await api.request('GET /users/{username}', { username });

    return {
      publicRepos: String(data.public_repos),
      followers: String(data.followers),
      following: String(data.following),
    };
  } catch (e) {
    console.error({ e });
  }
};

const userPackage = grpcObject.dev.dgvalerio.ufal;

const getServer = (): grpc.Server => {
  const server = new grpc.Server();

  server.addService(userPackage.User.service, {
    CountRepositories: async (req, res) => {
      console.log(`Buscando por: "${req.request}"\n\n`);

      const userData = await getUserData(req.request.userName || '');

      res(
        null,
        userData || { followers: '0', following: '0', publicRepos: '0' }
      );
    },
  } as UserHandlers);

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
