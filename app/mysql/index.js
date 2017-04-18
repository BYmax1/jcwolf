'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const db = {};

console.log(process.env.MYSQL_USERNAME);

const sequelize = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_DB_IP,
    dislect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
  );

fs.readdirSync(path.resolve(__dirname, 'models'))
  .filter(file => file.indexOf('.') !== 0)
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, 'models', file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

sequelize.sync();

module.exports = db;

//新建数据库
///CREATE DATABASE IF NOT EXISTS sale_manage DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
