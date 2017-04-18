'use strict';
const dotenv = require('dotenv-safe');
const path=require('path')
dotenv.load({ path: path.resolve(__dirname, '.env') });

var Db = require('../app/mysql');

Db.Staff.bulkCreate(
  [
    {'email': 'a@a.com', 'name': '科比','password':'123'},
    {'email': 'b@b.com', 'name': '麦迪','password':'123'},
    {'email': 'c@c.com', 'name': '詹姆斯','password':'123'}
  ]
);

