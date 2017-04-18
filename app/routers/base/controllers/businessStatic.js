

var Db = localRequire('./mysql');



//业务数据
module.exports = {
  url: '/businessStatic',
  method: 'GET',
  * handler(next) {
    var businesses = yield Db.Business.findAll(
      {
        'attributes': [
          'id', 'name','status','updatedAt','StaffId'
        ]
      }
    );
    var res=[];
    for(var i=0;i<businesses.length;i++)
    {
      var item=businesses[i];
      var staff = yield item.getStaff();
      var temp=JSON.parse(JSON.stringify(item));
      temp['staff'] = staff.name;
      res.push(temp);
    }
    this.body = res;
    yield next;
  }
};