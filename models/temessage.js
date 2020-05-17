var db = require('./db.js');

function Message(message) {
    this.id = message.id,
        this.username = message.username,
        this.name = message.name,
        this.cname = message.cname,
        this.registration = message.registration
};
//获取所有信息
Message.queryCourse = function(callback) {
    var selectSql = "select * from temessage";
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result; //数组
        callback(err, data);
    });
};


//通过账号获取信息
Message.GetMessage = function(username, callback) {
    var selectSql = 'select * from temessage where username = ?';
    db.query(selectSql, [username], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    });
};

//添加信息
Message.addMessage = function(message, callback) {
    var selectSql = 'insert into temessage (id,username,name,cname,registration)  values (?,?,?,?,?)';
    db.query(selectSql, [message.id, message.username, message.name, message.cname, message.registration], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
};

//总数
Message.countUsername = function(callback) {
    var selectSql = 'SELECT count(username) as count FROM temessage ';
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
};

//删除信息
Message.detemessage = function(id, callback) {
    var selectSql = 'DELETE FROM temessage WHERE  id =?';
    db.query(selectSql, [id], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
}

//3.把路由导出
module.exports = Message;