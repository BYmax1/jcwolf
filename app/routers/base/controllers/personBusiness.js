'use strict';

var Db = localRequire('./mysql');



//某个人的业务
module.exports = {
  url: '/personBusiness',
  method: 'GET',
  * handler(next) {
    var id=this.request.query['id'];
    var staff = yield Db.Staff.findOne({'id': id});
    if(!staff)
    {
      this.body=[];
    }
    else
    {
      this.body = yield staff.getBusinesses();
    }
    yield next;
  }
};