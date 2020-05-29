var db = require('./db.js');

function Thcourse(thcourse) {
    this.flag = thcourse.flag;
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
Thcourse.queryThcourse = function(flag, callback) {
    var selectSql = "select * from tchcourse WHERE flag not in (SELECT flag from tcresult) and profession =? ORDER BY createtime";
    db.query(selectSql, [flag], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    })
}

//删除教师选课信息 即让教师信息为空
// Thcourse.delThcourse = function(username, callback) {
//     var selectSql = "UPDATE tchcourse SET username ='',name ='',mid ='' WHERE id =?";
//     db.query(selectSql, [cno], function(err, result) {
//         if (err) {
//             return callback(err);
//         }
//         callback(err, result);
//     })
// }

//通过flag删除数据     课程人数够的情况
Thcourse.queryFlag = function(flag, callback) {
    var selectSql = 'select * from tchcourse where flag = ?';
    db.query(selectSql, [flag], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
}

//通过flag删除数据     课程人数够的情况
Thcourse.delThcourse = function(flag, callback) {
    var selectSql = 'DELETE FROM tchcourse  WHERE  flag =?';
    db.query(selectSql, [flag], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

//给课程找老师
Thcourse.findThcourse = function(username, name, mid, flag, callback) {
    var selectSql = "UPDATE tchcourse SET username =?,name =?,mid =? WHERE flag=?";
    db.query(selectSql, [username, name, mid, flag], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    })
}


module.exports = Thcourse;