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
    this.registration = user.registration
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

//总数
User.countTeacher = function(callback) {
    var selectSql = 'SELECT count(id) as count FROM users ';
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
};

//添加信息
User.addteacher = function(user, callback) {
    var selectSql = 'insert into users (id,username,password,name,sex,birthday,mobile,duty,mid)  values (?,?,?,?,?,?,?,?,?)';
    db.query(selectSql, [user.id, user.username, user.password, user.name, user.sex, user.birthday, user.mobile, user.duty, user.mid], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
};
/*//根据用户密码获取数据
User.getUserByPassword = function(password, callback) {
    var selectSql = 'select * from users where password = ?';
    db.query(selectSql, [password], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    });
};*/

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

//删除信息
User.deteacher = function(id, callback) {
    var selectSql = 'DELETE FROM users WHERE  id =?';
    db.query(selectSql, [id], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}
module.exports = User;