var db = require('./db.js');

function Thcourse(thcourse) {
    this.username = thcourse.username;
    this.name = thcourse.name;
    this.mid = thcourse.mid;
    this.cname = thcourse.cname;
    this.csmajor = thcourse.csmajor;
};

//添加选课信息
Thcourse.addThcourse = function(thcourse, callback) {
    var selectSql = 'insert into tchcourse (username,name,mid,cname,csmajor)  values (?,?,?,?,?)';
    db.query(selectSql, [thcourse.username, thcourse.name, thcourse.mid, thcourse.cname, thcourse.csmajor], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

module.exports = Thcourse;