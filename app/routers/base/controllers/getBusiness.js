'use strict';

var Db = localRequire('./mysql');



//获得某个业务
module.exports = {
  url: '/getBusiness',
  method: 'POST',
  * handler(next) {
    var businessId=this.request.body['businessId'];
    var Business = yield Db.Business.findById(businessId);
    this.body=Business;
    
    yield next;
  }
};