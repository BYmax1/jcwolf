'use strict';

var Db = localRequire('./mysql');


//删除业务
module.exports = {
  url: '/deleteBusiness',
  method: 'POST',
  * handler(next) {
    var deletedIds=this.request.body['deletedIds'];
    var count = yield Db.Business.destroy(
      {
        'where':{'id':deletedIds}
      }
    );
    this.body = count;
    yield next;
  }
};