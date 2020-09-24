const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'main.ts',
    path: path.resolve(__dirname, 'dist'),
  },
};