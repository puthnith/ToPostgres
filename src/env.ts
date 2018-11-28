import * as fs from 'fs';

const config = require('dotenv').parse(fs.readFileSync('.env'));

for (let key in config) {
  process.env[key] = config[key];
}
