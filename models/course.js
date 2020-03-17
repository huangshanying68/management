var db = require('./db.js');

function User(user) {
	this.id=user.id;
	this.username = user.username;  //账号
	this.password = user.password;
	this.name = user.name;    //姓名
	this.sex=user.sex;
	this.birthday=user.birthday;
    this.mobile=user.mobile;
    this.duty=user.duty;
    this.mid=user.mid;
};
//获取课程所有信息
User.queryCourse=function(callback){
	var selectSql="select * from course";
	db.query(selectSql, function (err, result) {
		if (err) {
			return callback(err);
		}
		var data = result;  //数组
		callback(err, data);
	});
};

//模糊搜素
//User.querySearch=function()
/*Product.queryProductDetailList= function (product, page, callback) {
  var selectSql = "SELECT * FROM product WHERE 1=1 ";
  var param = new Array();
  if (product.proName) {
    selectSql = selectSql + " AND  proName LIKE ? ";
    param[0] = '%' + product.proName + '%';
  }
  if (product.brandId) {
    selectSql = selectSql + " AND  brandId =? ";
    param[param.length] = product.brandId;
  }
  if (product.price) {
    if (product.price == 1) selectSql = selectSql + " ORDER BY price ";
    if (product.price == 2) selectSql = selectSql + " ORDER BY price DESC ";
  }
  else if (product.num) {
    if (product.num == 1) selectSql = selectSql + " ORDER BY num ";
    if (product.num == 2) selectSql = selectSql + " ORDER BY num DESC ";
  }else{
      selectSql = selectSql + " ORDER BY id DESC ";
  }
  selectSql = selectSql + " LIMIT ?,?";
  param[param.length] = (page.page - 1) * page.size;
  param[param.length] = page.size;
  console.log(selectSql);
  console.log(param);
  db.query(selectSql, param, function (err, result) {
    if (err) {
      return callback(err);
    }
    var data = result;
    callback(err, data);
  });
};
Product.countProductDetailList = function (callback) {
    var selectSql = 'SELECT count(id) as count FROM product WHERE 1=1';
    db.query(selectSql, function (err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
};*/
//3.把路由导出
module.exports=User;