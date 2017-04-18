'use strict';

var Db = localRequire('./mysql');


//获取业务描述
module.exports = {
  url: '/getDesc',
  method: 'POST',
  * handler(next) {

    var businessId=this.request.body['businessId'];

  
    var business = yield Db.Business.findOne({
      'where':
      {
          'id': businessId
      }
    });
    if(!business)
    {
      this.body=[];
    }
    else
    {
       var desc= yield business.getDescriptions();
       this.body = desc;
    }
    yield next;
  }
};
