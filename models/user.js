var db = require('./db.js');


function User(user) {
    this.id = user.id;
    this.username = user.username; //账号
    this.password = user.password;
    this.name = user.name; //姓名
    this.sex = user.sex;
    this.birthday = user.birthday;
    this.mobile = user.mobile;
    this.duty = user.duty;
    this.mid = user.mid;
};

//获取用户所有信息
User.queryUserMessage = function(callback) {
    var selectSql = 'select * from users ';
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    });
};

//根据用户账号获取数据
User.getUserName = function(username, callback) {
    var selectSql = 'select * from users where username = ?';
    db.query(selectSql, [username], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    });
};

//根据用户密码获取数据
User.getUserByPassword = function(password, callback) {
    var selectSql = 'select * from users where password = ?';
    db.query(selectSql, [password], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    });
};

//根据专业编号获取专业名称
User.getUserNameMajor = function(id, callback) {
    var selectSql = 'select mname from major where id = ?';
    db.query(selectSql, [id], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
};

//修改密码
User.updatePassword = function(username, password, callback) {
    var selectSql = 'UPDATE users SET password =? WHERE username=?';
    db.query(selectSql, [password, username], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
};
module.exports = User;