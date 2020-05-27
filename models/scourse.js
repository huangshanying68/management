var db = require('./db.js');

function Scourse(scourse) {
    this.cno = scourse.cno;
    this.cname = scourse.cname;
    this.nature = scourse.nature;
    this.profession = scourse.profession;
    this.cydates = scourse.cydates;
    this.cftimes = scourse.cftimes;
    this.csmajor = scourse.csmajor;
};
//获取课程所有信息
Scourse.queryCourse = function(callback) {
    var selectSql = "select * from scourse";
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result; //数组
        callback(err, data);
    });
};

//通过课程专业获取信息
Scourse.GetMessage = function(profession, callback) {
    var selectSql = 'select * from scourse where profession = ?';
    db.query(selectSql, [profession], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    });
};

//获取总数
Scourse.countCourse = function(callback) {
    var selectSql = 'SELECT count(cno) as count FROM scourse ';
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
};

//添加信息
Scourse.addCourse = function(scourse, callback) {
    var selectSql = 'insert into scourse (cno,cname,nature,profession,cydates,cftimes,csmajor)  values (?,?,?,?,?,?,?)';
    db.query(selectSql, [scourse.cno, scourse.cname, scourse.nature, scourse.profession, scourse.cydates, scourse.cftimes, scourse.csmajor], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
};

//通过id删除数据
Scourse.delScourse = function(cno, callback) {
        var selectSql = 'DELETE FROM scourse WHERE  cno =?';
        db.query(selectSql, [cno], function(err, result) {
            if (err) {
                return callback(err);
            }
            callback(err, result);
        });
    }
    //3.把路由导出
module.exports = Scourse;