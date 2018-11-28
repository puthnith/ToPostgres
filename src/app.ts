import { createConnection, ConnectionOptions, Connection } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  synchronize: true,
  entities: [__dirname + '/entities/**/*'],
};

function app(action: (connection: Connection) => Promise<any>) {
  return createConnection(config)
    .then(async connection => {
      return action(connection);
    })
    .catch(console.log);
}

export default app;
