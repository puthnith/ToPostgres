import './env';

import app from './app';
import { Product } from './entities';
import * as uuid from 'uuid/v4';

app(async connection => {
  const repo = connection.getRepository(Product);

  const product = repo.create({
    id: uuid(),
    name: 'Apple',
  });

  await repo.save(product).then(console.log);
});
