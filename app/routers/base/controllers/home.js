'use strict';

var Db = localRequire('./mysql');

module.exports = {
  url: '/',
  method: 'GET',
  * handler(next) {
    var staff = yield Db.Staff.findOne({'id': '1'});
    this.body = yield staff.getBusinesses();
    yield next;
  }
};
