

var Db = localRequire('./mysql');



//团队总览
module.exports = {
  url: '/teamOverview',
  method: 'GET',
  * handler(next) {
    var staffs = yield Db.Staff.findAll();
    var res=[];
    for(var i=0;i<staffs.length;i++)
    {
      var item=staffs[i];
      var businesses = yield item.getBusinesses();
      var map={
        '10':'contact',
        '20':'demo',
        '30':'negotiate',
        '40':'contract',
        '50':'done'
      };
      var temp={
        id:item.id,
        name:item.name,
        businessCount:businesses.length,
        contact:0,
        demo:0,
        negotiate:0,
        contract:0,
        done:0,
        credit:0
      };
      businesses.forEach(function (item) {
        temp[map[item.status]]++;
        temp.credit=item.status;
      });
      res.push(temp);
    }

      



    this.body = res;
    yield next;
  }
};