'use strict';

const path = require('path');
const routerApp = require('koa-router')();
const logger = require('./tools/logger');

const requireDir = localRequire('tools/requireDir');
const allRouters = requireDir(path.resolve(__dirname, './routers'));

const options = {
  ext: '.table',
  banner: `Update Date: ${new Date().toString()}\n\n`,
  callback() {
    process.stdout.write('Route Table Complete!!\n');
  }
};
const routeTable = logger('route', options);

allRouters.forEach((router) => {
  routerApp.use(router.routes());
});

for (let len = routerApp.stack.length, i = 0; i < len; i += 1) {
  const route = routerApp.stack[i];
  routeTable.write(`URL:${route.path}\t${route.methods[0]}\n`);
}

module.exports = routerApp;
