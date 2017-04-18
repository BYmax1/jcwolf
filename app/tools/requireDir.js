/*
*  App 关键工具; 如果你不明白你在做什么，请不要改动它。
*/

'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (dirname) => {
  let files = fs.readdirSync(dirname);
  files = files.filter(file => !file.startsWith('.'));
  // eslint-disable-next-line
  return files.map(filename => require(path.resolve(dirname, filename)));
};
