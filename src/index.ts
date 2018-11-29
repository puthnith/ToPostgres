import './env';

import app from './app';
import { Product } from './entities';
import * as uuid from 'uuid/v4';

app(async connection => {
  const repo = connection.getRepository(Product);

  const product = repo.create({
    id: uuid(),
    name: 'DJI Osmo Pocket',
    short: '3-Axis Stabilized Handheld Camera',
    description:
      `As the smallest 3-axis stabilized handheld` +
      `camera DJI has ever designed, the compact and intelligent` +
      `Osmo Pocket turns any moment into a cinematic memory.`,
    price: 359,
  });

  await repo.save(product).then(console.log);
});
