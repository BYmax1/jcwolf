'use strict';

var Db = localRequire('./mysql');


//更改业务状态
module.exports = {
  url: '/updateStatus',
  method: 'POST',
  * handler(next) {

    var businessId=this.request.body['businessId'];
    var status=this.request.body['status'];

    var business = yield Db.Business.findOne({
      'where':
      {
        'id':businessId
      }
    });

    //新建一条操作纪录
    var history = yield business.createHistory(
    {
      'status':status
    });

    business = yield business.update(
    {
      'status':status
    })
    this.body = business;
    yield next;
  }
};
