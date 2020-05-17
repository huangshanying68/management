var express = require("express");
var User = require('../models/user.js');
var Anment = require("../models/announcement.js")
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
    // console.log(req.session.user)
    //console.log(message1);  undefined  数据只在获取里有效
    Anment.queryMessage(function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" })
        }
        //数组转换成对象
        let data = {
            anmessage: result
        };

        res.render("./research/reindex.html", {
            //随意命名参数:数据
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            datas: data.anmessage //只能为对象  数据获取不到   公告信息
        });

    });

});


//是否登录   每次判断获取用户信息req.session.user
routers.get("/announcement", checkUserLogin);

//渲染数据 点击id显示每条公告详细信息
routers.get("/announcement", function(req, res) {
    /*1.在客户端的列表中处理链接问题 需要id参数
     *2.获取信息的id参数  从/research/announcement?id={{ $value.id }}中获取   
     *方法:req.query.id获取到字符串
     *渲染页面:
     *根据id把信息查出来
     *使用模板引擎渲染页面
     */
    // console.log(parseInt(req.query.id));
    Anment.GetMessage(parseInt(req.query.id), function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" })
        }

        //     /*console.log(result);
        //     console.log(req.session.user);*/
        res.render("./research/redetail.html", {
            //随意命名参数:数据
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: result

        });
    });
});


//3.把路由导出
module.exports = routers;