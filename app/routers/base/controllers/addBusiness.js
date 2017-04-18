'use strict';

var Db = localRequire('./mysql');


//增加业务
module.exports = {
  url: '/addBusiness',
  method: 'POST',
  * handler(next) {

    var name=this.request.body['businessName'];
    var descContent=this.request.body['descContent'];
    var StaffId=this.request.body['StaffId'];
    var business = yield Db.Business.create({
      'name': name,
      'StaffId': StaffId,
    });
    var desc= yield business.createDescription(
      {
        'content':descContent
      }
    );
    this.body = business;
    yield next;
  }
};
