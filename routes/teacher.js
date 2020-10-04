var express = require("express");
var User = require('../models/user.js');
var Anment = require("../models/announcement.js")
var Course = require("../models/course.js");
var Thcourse = require("../models/tchcourse.js")
var Tcresult = require("../models/tcresult.js")
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

        res.render("./teacher/teindex.html", {
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
     *2.获取信息的id参数  从/teacher/announcement?id={{ $value.id }}中获取   
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

        /*console.log(result);
        console.log(req.session.user);*/
        res.render("./teacher/andetail.html", {
            //随意命名参数:数据
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: result

        });
    });
});


//选课列表
//是否登录   每次判断获取用户信息req.session.user
routers.get("/course", checkUserLogin);
//是否登录   每次判断获取用户信息req.session.user
routers.get("/course", function(req, res) {
    Course.queryCourse(req.session.user.username, req.session.user.username, function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" });
        }
        //数组转换成对象
        let datas = {
            message: result
        };
        res.render("./teacher/tcourse.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.message
        })
    })
})

//选课
//是否登录   每次判断获取用户信息req.session.user
routers.post("course/chdel", checkUserLogin);
routers.post("/course/chdel", function(req, res) {
    var thcourse = new Thcourse({
        username: req.session.user.username,
        name: req.session.user.name,
        mid: req.session.user.mid,
        cno: req.body.cno,
        cname: req.body.cname,
        csmajor: req.body.csmajor,
        profession: req.body.profession,
        cydates: req.body.cydates
    });

    Thcourse.addThcourse(thcourse, function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        res.send({ "success": true });

    })

})

//选课课程详情
//是否登录   每次判断获取用户信息req.session.user
routers.get("/course/detail", checkUserLogin);

//渲染数据 点击id显示每条题目详细信息
routers.get("/course/detail", function(req, res) {
    /*1.在客户端的列表中处理链接问题 需要id参数
     *2.获取信息的id参数  从/teacher/course/detail?id={{ $value.id }}中获取   
     *方法:req.query.id获取到字符串
     *渲染页面:
     *根据id把信息查出来
     *使用模板引擎渲染页面
     */
    Course.getCno(req.query.cno, function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" })
        }
        res.render("./teacher/cdetail.html", {
            //随意命名参数:数据
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: result

        });
    });
});

//选课详情  查看选的课程
//是否登录   每次判断获取用户信息req.session.user
routers.get("/decourse", checkUserLogin);
routers.get("/decourse", function(req, res) {
    Thcourse.seUsername(req.session.user.username, req.session.user.username, function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" })
        }
        let datas = {
            results: result
        }
        res.render("./teacher/tcancel.html", {
            //随意命名参数:数据
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.results

        });
    });
});

//取消选课
routers.post("/decourse/recdel", checkUserLogin);
routers.post("/decourse/recdel", function(req, res) {
    console.log(req.body.cno);
    console.log(req.session.user.username);
    Thcourse.delCourse(req.body.cno, req.session.user.username, function(err, result) {
        console
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" })
        }
        res.send({ "success": true });

    });
});

//教学信息查看
//是否登录   每次判断获取用户信息req.session.user
routers.get("/message", checkUserLogin);
routers.get("/message", function(req, res) {
    Tcresult.usTcresult(req.session.user.username, function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" })
        }
        let datas = {
            ts: result
        }
        res.render("./teacher/message.html", {
            //随意命名参数:数据
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.ts
        });
    })
});
//批量删除 
routers.post("tecmessage/del", checkUserLogin);
routers.post("tecmessage/del", function(req, res) {
    Tcresult.delTcresult(function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" })
        }
        res.send({ "success": true });

    })
});

//是否登录   每次判断获取用户信息req.session.user
routers.get("/tecpasword", checkUserLogin);
routers.get("/tecpasword", function(req, res) {
    res.render("./teacher/techanges.html", {
        usermessage: req.session.user //登陆后登录信息保存在req.session.user
    })
});

//是否登录   每次判断获取用户信息req.session.user
routers.post("/tecpasword", checkUserLogin);
routers.post("/tecpasword", function(req, res) {
    //req.body获取表单post请求体数据 app.js body-parser
    var oldPassword = req.body.oldPassword;
    var newPassword = req.body.newPassword;
    var username = req.session.user.username;
    User.getUserName(username, function(err, results) {
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