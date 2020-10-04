/*mysql连接*/
'use strict';
//引包  下载的包
const mysql = require('mysql');
//node通过连接池连接mysql

// 创建 mysql 连接池资源
const pool = mysql.createPool({
    host: "localhost",
    port: "3306", //也可以不写  因为默认3306
    user: "root",
    password: "123456",
    database: "system_data" //要连接的数据库名
});
// 如果用户传递了两个参数，那么第一个就是 SQL 操作字符串， 第二个就是回调函数
// 如果是三个参数：第一个SQL字符串，第二个数组，第三个参数回调函数
exports.query = function() {
    let args = arguments;

    let sqlStr = args[0];
    let params = [];
    let callback;

    if (args.length === 2 && typeof args[1] === 'function') {
        callback = args[1];
    } else if (args.length === 3 && Array.isArray(args[1]) && typeof args[2] === 'function') {
        params = args[1];
        callback = args[2];
    } else {
        throw new Error('参数个数不匹配');
    }
    //建立链接
    pool.getConnection(function(err, connection) {
        if (err) {
            callback(err);
            return;
        }
        connection.query(sqlStr, params, function(err, rows) {
            if (err) {
                callback(err);
                return;
            }
            //将链接返回到连接池中，准备由其他人重复使用 释放连接 
            connection.release();
            //执行回调函数，将数据返回
            callback.apply(null, arguments);
        });
    });
};