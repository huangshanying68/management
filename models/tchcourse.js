var db = require('./db.js');

function Thcourse(thcourse) {
    this.username = thcourse.username;
    this.name = thcourse.name;
    this.mid = thcourse.mid;
    this.cno = thcourse.cno;
    this.cname = thcourse.cname;
    this.csmajor = thcourse.csmajor;
    this.profession = thcourse.profession;
    this.createtime = thcourse.createtime;
};

//添加选课信息
Thcourse.addThcourse = function(thcourse, callback) {
    var selectSql = 'insert into tchcourse (username,name,mid,cno,cname,csmajor,profession)  values (?,?,?,?,?,?,?)';
    db.query(selectSql, [thcourse.username, thcourse.name, thcourse.mid, thcourse.cno, thcourse.cname, thcourse.csmajor, thcourse.profession], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

//根据可选专业的模糊进行显示数据
Thcourse.queryThcourse = function(username, callback) {
    var selectSql = "select * from tchcourse WHERE profession =? ORDER BY createtime";
    db.query(selectSql, [username], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    })
}
module.exports = Thcourse;