var express = require("express");
var User = require('../models/user.js');
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
routers.get("/login", function(req, res) {
    res.render("login.html");
});
routers.post("/login", async(req, res, next) => {
        var password = req.body.password;
        var roles = req.body.roles;
        User.getUserName(req.body.username, function(err, result) {
            if (!err) {
                if (result.length == 0) {
                    return res.send({ "error": 403, "message": "账号不存在! " });
                }
                if (password != result[0].password) {
                    return res.send({ "error": 403, "message": "密码错误！" });
                }
                if (roles != result[0].duty) {
                    return res.send({ "error": 403, "message": "账号类型错误！" });
                }
                req.session.user = result[0];
                //console.log(req.session.user);
                res.send({
                    "success": true,
                    "roles": result[0].duty //转给前端ajax
                });
            }

        });
    })
    // 登出
routers.get("/logout", (req, res) => {
    // 1 清除session
    // 2. 重定向
    delete req.session.user;
    res.redirect("/user/login");
});

//3.把路由导出
module.exports = routers;