'use strict';

require('./init')();

const bodyParser = require('koa-bodyparser');

const app = require('./app');
var cors = require('koa-cors');
const routerApp = require('./routes');
const callback = require('./callback');

app.use(bodyParser());
app.use(routerApp.routes());
app.use(cors());

app.listen(process.env.PORT || 8080, () => {
  callback(routerApp);
});
