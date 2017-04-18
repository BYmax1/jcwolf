'use strict';

const path = require('path');
const routerApp = require('koa-router')();

const schema = localRequire('middlewares/schema');
const returnError = localRequire('tools/returnError');
const requireDir = localRequire('tools/requireDir');

const prefix = '';

const ctrls = requireDir(path.resolve(__dirname, './controllers'));

ctrls.forEach((ctrl) => {
  routerApp[ctrl.method.toLowerCase()](
    ctrl.url,
    schema(ctrl.schema || {}, returnError),
    ctrl.handler
  );
});

routerApp.prefix(prefix);

module.exports = routerApp;
