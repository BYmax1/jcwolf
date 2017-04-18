/*
*  app 启动成功的回调函数
*/

'use strict';

const fs = require('fs');
const path = require('path');
const logger = require('./tools/logger')('route');

module.exports = function () {
  logger.end();

  fs.writeFile(path.resolve(__basename, '../process.json'),
    JSON.stringify({
      pid: process.pid, port: process.env.PORT || 8080, time: new Date().toString()
    })
  );

  process.stdout.write(`server listen on port:${process.env.PORT || 8080}\n`); 
};
