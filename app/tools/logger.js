/*
*  wrap with file stream and logger
*/

'use strict';

const fs = require('fs');
const path = require('path');

const basepath = path.resolve(__basename, '../log');

function isDir(file) {
  try {
    const stat = fs.statSync(file);
    return stat && stat.isDirectory();
  } catch (err) {
    return false;
  }
}

if (!isDir(basepath)) {
  fs.mkdir(basepath);
}


function Logger(name, options) {
  if (Logger.maps[name]) { return Logger.maps[name]; }
  if (!(this instanceof Logger)) {
    return new Logger(name, options);
  }
  Logger.maps[name] = this;
  const ops = Object.assign({}, Logger.options, options || {});
  this.name = name;
  this.path = path.resolve(ops.base, name + ops.ext);
  this.fs = fs.createWriteStream(this.path);

  const banner = ops.banner;
  const callback = ops.callback;
  if (banner) {
    this.fs.write(banner);
  }
  if (callback && typeof callback === 'function') {
    this.fs.on('finish', callback);
    this.fs.on('finish', () => {
      Logger.maps[this.name] = undefined;
    });
  }
}

Logger.prototype.write = function (str) {
  this.fs.write(str);
};

Logger.prototype.end = function () {
  this.fs.end();
};

Logger.maps = {};
Logger.options = {
  base: basepath,
  ext: '.log'
};

module.exports = Logger;
