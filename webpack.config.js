import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { buildWebpack } from './config/build/buildWebpack.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env) => {

  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    html2: path.resolve(__dirname, 'public', 'menu.html')
  }

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths
  });

  return config;
}