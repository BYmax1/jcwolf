'use strict';
const dotenv = require('dotenv-safe');
const path=require('path')
dotenv.load({ path: path.resolve(__dirname, '.env') });

var Db = require('../app/mysql');

Db.Business.bulkCreate(
  [
    {'name': '唯品会', 'status': 10,'StaffId':1},
    {'name': '美团', 'status': 10,'StaffId':1},
    {'name': '新浪微博', 'status': 20,'StaffId':2}
  ]
);

