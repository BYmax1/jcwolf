'use strict';

const path = require('path');
const dotenv = require('dotenv-safe');

module.exports = () => {
  /* eslint-disable */
  global.localRequire = (localPath) => {
    return require(path.resolve(__dirname, localPath));
  };
  /* eslint-enable */

  global.__basename = __dirname;  // eslint-disable-line no-underscore-dangle

  // load configure
  if (process.env.NODE_ENV === 'development') {
    dotenv.load({ path: path.resolve(__dirname, '../.env.dev') });
  } else {
    dotenv.load();
  }
};
