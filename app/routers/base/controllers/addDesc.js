'use strict';

var Db = localRequire('./mysql');


//添加业务描述
module.exports = {
  url: '/addDesc',
  method: 'POST',
  * handler(next) {

    var businessId=this.request.body['businessId'];
    var descContent=this.request.body['descContent'];
    var status=this.request.body['status'];
    var business = yield Db.Business.findOne({
      'where':
      {
        'id':businessId
      }
    });
    var desc= yield business.createDescription(
      {
        'content':descContent,
        'status' : status
      }
    );
    this.body = desc;
    yield next;
  }
};
