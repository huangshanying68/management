var db = require('./db.js');

function Course(course) {
    this.cno = course.cno;
    this.cname = course.cname;
    this.nature = course.nature;
    this.profession = course.profession;
    this.cydates = course.cydates;
    this.cftimes = course.cftimes;
    this.csmajor = course.csmajor;
    this.capacity = course.capacity;
    this.cteachers = course.cteachers;
};
//根据账号获取课程所有信息
Course.queryCourse = function(username, callback) {
    var selectSql = "SELECT * from course WHERE cno not in(SELECT cno from tchcourse where username=?)";
    db.query(selectSql, [username], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result; //数组
        callback(err, data);
    });
};

//通过cno获取信息
Course.getCno = function(cno, callback) {
    var selectSql = 'select * from course where cno = ?';
    db.query(selectSql, [cno], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
};

//获取总数
Course.countCourse = function(callback) {
    var selectSql = 'SELECT count(cno) as count FROM course ';
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
};

//添加信息
Course.addCourse = function(course, callback) {
    var selectSql = 'insert into course (cno,cname,nature,profession,cydates,cftimes,csmajor)  values (?,?,?,?,?,?,?)';
    db.query(selectSql, [course.cno, course.cname, course.nature, course.profession, course.cydates, course.cftimes, course.csmajor], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
};

//通过cno删除数据
Course.delCourse = function(cno, callback) {
    var selectSql = 'DELETE FROM course WHERE  cno =?';
    db.query(selectSql, [cno], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

//通过课程专业获取信息
Course.GetMessage = function(profession, callback) {
    var selectSql = 'select * from course where profession = ?';
    db.query(selectSql, [profession], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    });
};

//获取所有信息
Course.allCourse = function(callback) {
    var selectSql = "SELECT * from course ";
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result; //数组
        callback(err, data);
    });
};

//3.把路由导出
module.exports = Course;