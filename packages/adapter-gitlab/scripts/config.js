const path = require('path');
const packageJson = require('../package.json');

exports.baseConfig = {
  entryPoints: [path.resolve(__dirname, '../src/index.ts')],
  external: [
    ...Object.keys(packageJson.dependencies),
    ...Object.keys(packageJson.peerDependencies ?? []),
  ],
  bundle: true,
  minify: true,
  platform: 'browser',
  absWorkingDir: path.resolve(__dirname, '../'),
  tsconfig: path.resolve(__dirname, '../tsconfig.json'),
  outfile: path.resolve(__dirname, '../dist/index.js'),
};
