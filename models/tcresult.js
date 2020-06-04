var db = require('./db.js');

function Tcresult(tcresult) {
    this.id = tcresult.id;
    this.cname = tcresult.cname;
    this.cno = tcresult.cno;
    this.csmajor = tcresult.csmajor;
    this.username = tcresult.username;
    this.name = tcresult.name;
    this.mid = tcresult.mid;
    this.flag = tcresult.flag;
    this.cydates = tcresult.cydates;
    this.profession = tcresult.profession;

};

//添加课程教师确认信息
Tcresult.addTcresult = function(tcresult, callback) {
    var selectSql = 'insert into tcresult (flag,username,name,mid,cname,cno,csmajor,cydates,profession)  values (?,?,?,?,?,?,?,?,?)';
    db.query(selectSql, [tcresult.flag, tcresult.username, tcresult.name, tcresult.mid, tcresult.cname, tcresult.cno, tcresult.csmajor, tcresult.cydates, tcresult.profession], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

//将tchcourse表的数据移到tcresult
Tcresult.movTcresult = function(flag, callback) {
    var selectSql = 'insert into tcresult (flag,username,name,mid,cname,cno,csmajor) select flag,username,name,mid,cname,cno,csmajor from tchcourse where flag=? ';
    db.query(selectSql, [flag], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}


//根据教师账号获取数据
Tcresult.usTcresult = function(username, callback) {
    var selectSql = 'select * from tcresult where username = ?';
    db.query(selectSql, [username], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

//获取所有数据
Tcresult.dallTcresult = function(callback) {
    var selectSql = 'select * from tcresult ';
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

//删除所有的数据
Tcresult.delTcresult = function(callback) {
    var selectSql = 'delete from tcresult ';
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

//根据课程专业获取数据
Tcresult.tProfession = function(profession, callback) {
    var selectSql = 'select * from tcresult where profession = ?';
    db.query(selectSql, [profession], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}


//按学期查找
Tcresult.rCydates = function(cydates, callback) {
    var selectSql = 'select * from tcresult where cydates=?';
    db.query(selectSql, [cydates], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}



module.exports = Tcresult;