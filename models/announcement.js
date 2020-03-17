var db = require('./db.js');

//公告处理
function Anment(anment) {
	this.id=anment.id;
	this.title = anment.title;  //公告标题
	this.dates = anment.dates;  //公告时间
	this.content = anment.content;    //公告内容

};
//获取公告所有信息
Anment.queryMessage = function (callback) {
	var selectSql = 'select * from announcement ';
	db.query(selectSql,function (err, result) {
		if (err) {
			return callback(err);
		}
		var data=result;
		callback(err, data);
	});
};

//通过id得知信息总数
Anment.countMessage = function (callback) {
  var selectSql = 'SELECT count(id) as count FROM announcement ';
  db.query(selectSql, function (err, result) {
    if (err) {
      return callback(err);
    }
    var data = result[0];
    callback(err, data);
  });
};

//通过id获取信息
Anment.GetMessage = function (id, callback) {
	var selectSql = 'select * from announcement where id = ?';
	db.query(selectSql, [id], function (err, result) {
		if (err) {
			return callback(err);
		}
		var data = result[0];
		callback(err, data);
	});
};
module.exports=Anment;