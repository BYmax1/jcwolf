'use strict';

var Db = localRequire('./mysql');


//用户鉴权
module.exports = {
  url: '/authentic',
  method: 'POST',
  * handler(next) {

    var email=this.request.body['email'];
    var password=this.request.body['password'];

    var staff = yield Db.Staff.findOne({
      'where':
      {
        'email':email
      }
    });
    
    //密码正确,设置cookie,返回token
    if(staff&&staff.password==password)
    {
       //响应头设置cookie

       this.cookies.set('userName',staff.name,{domain:'localhost'});
       this.body = {code:0,msg:'登录成功'};
    }
    else
    {
       this.body ={code:-1,msg:'登录失败'};
    }
    yield next;
  }
};
