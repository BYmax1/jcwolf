'use strict';

var Db = localRequire('./mysql');



//业务总览
module.exports = {
  url: '/businessOverview',
  method: 'GET',
  * handler(next) {
    var staffCount = yield Db.Staff.count();
    var business = yield Db.Business.findAndCountAll();
    var map={
      '10':'contact',
      '20':'demo',
      '30':'negotiate',
      '40':'contract',
      '50':'done'
    };
    var res={
      staffCount:staffCount,
      businessCount:business.count,
      contact:0,
      demo:0,
      negotiate:0,
      contract:0,
      done:0
    };
    business.rows.forEach(function (item) {
      res[map[item.status]]++;
    });
    this.body = res;
    yield next;
  }
};