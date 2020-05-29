var express = require("express");
var Message = require('../models/temessage.js');
var Tcresult = require('../models/tcresult.js')
    //1.创建路由容器
var routers = express.Router();

//检查用户是否登录
function checkUserLogin(req, res, next) {
    if (!req.session.user) {
        return res.send({ "error": 400, "message": "未登录！" });
    }

    next();
}

//教学信息查看
routers.get("/", checkUserLogin);
routers.get("/", function(req, res) {
    Tcresult.dallTcresult(function(err, result) {
        console.log(result)
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" })
        }
        let datas = {
            ts: result
        }
        res.render("./ledmin/lecmessage.html", {
            //随意命名参数:数据
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.ts
        });
    })
});

//教学档案信息查看
//是否登录   每次判断获取用户信息req.session.user
routers.get("/tesearch", checkUserLogin);
routers.get("/tesearch", function(req, res) {
    Message.queryCourse(function(err, results) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        let datas = {
            tmessage: results
        };
        res.render("./ledmin/lemessage.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.tmessage
        })

    });
});

//3.把路由导出
module.exports = routers;