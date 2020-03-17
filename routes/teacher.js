var express = require("express");
var User = require('../models/user.js');
var Anment = require("../models/announcement.js")
var Course = require("../models/course.js");
//1.创建路由容器
var routers = express.Router();

//检查用户是否登录
function checkUserLogin(req, res, next) {
    if (!req.session.user) {
        return res.send({ "error": 400, "message": "未登录！" });
    }

    next();
}

//2.把路由挂载到routers路由容器中

//是否登录
routers.get("/", checkUserLogin);
//公告数据
routers.get("/", function(req, res) {
    //console.log(message1);  undefined  数据只在获取里有效
    Anment.queryMessage(function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" })
        }
        //数组转换成对象
        let data = {
            anmessage: result
        };
        User.getUserNameMajor(req.session.user.mid, function(err, result) {
            if (err) {
                res.send({ "error": 403, "message": "数据库异常！" })
            }
            /*console.log(req.session.user)
            console.log(data.anmessage);
            console.log(result);*/
            res.render("./teacher/teindex.html", {
                //随意命名参数:数据
                usermessage: req.session.user, //登陆后登录信息保存在req.session.user
                datas: data.anmessage, //只能为对象  数据获取不到   公告信息
                major: result
            });

        });

    });

});

//是否登录   每次判断获取用户信息req.session.user
routers.get("/announcement", checkUserLogin);

//渲染数据 点击id显示每条公告详细信息
routers.get("/announcement", function(req, res) {
    /*1.在客户端的列表中处理链接问题 需要id参数
     *2.获取信息的id参数  从/teacher/announcement?id={{ $value.id }}中获取   
     *方法:req.query.id获取到字符串
     *渲染页面:
     *根据id把信息查出来
     *使用模板引擎渲染页面
     */
    console.log(parseInt(req.query.id));
    Anment.GetMessage(parseInt(req.query.id), function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" })
        }
        User.getUserNameMajor(req.session.user.mid, function(err, results) {
            if (err) {
                res.send({ "error": 403, "message": "数据库异常！" })
            }
            /*console.log(result);
            console.log(req.session.user);*/
            res.render("./teacher/andetail.html", {
                //随意命名参数:数据
                usermessage: req.session.user, //登陆后登录信息保存在req.session.user
                major: results,
                data: result

            });
        });
    });

});

//是否登录   每次判断获取用户信息req.session.user
routers.get("/tecpasword", checkUserLogin);
//是否登录   每次判断获取用户信息req.session.user
routers.get("/tecpasword", function(req, res) {
    User.getUserNameMajor(req.session.user.mid, function(err, results) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" })
        }
        res.render("./teacher/techanges.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            major: results
        })
    });
});
//是否登录   每次判断获取用户信息req.session.user
routers.post("/tecpasword", checkUserLogin);
routers.post("/tecpasword", function(req, res) {
    //req.body获取表单post请求体数据 app.js body-parser
    var oldPassword = req.body.oldPassword;
    var newPassword = req.body.newPassword;
    var conPassword = req.body.conPassword;
    var username = req.session.user.username;
    User.getUserName(req.session.user.username, function(err, results) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" })
        }
        var result = results[0];
        if (oldPassword != result.password) {
            return res.send({ "error": 403, "message": "密码错误!" });
        }
        User.updatePassword(username, newPassword, function(err, data) {
            if (err) {
                return res.send({ "error": 403, "message": "数据库异常!" });
            }
            req.session.user = null;
            res.send({ "success": true });
        })
    })
})


//3.把路由导出
module.exports = routers;