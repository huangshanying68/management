var express = require("express");
var User = require('../models/user.js');
var Scourse = require("../models/scourse.js")
var Message = require('../models/temessage.js');
var Anment = require('../models/announcement.js');
var Tcresult = require('../models/tcresult.js');
var Course = require('../models/course.js');
//1.创建路由容器
var routers = express.Router();

//检查用户是否登录
function checkUserLogin(req, res, next) {
    if (!req.session.user) {
        return res.send({ "error": 400, "message": "未登录！" });
    }

    next();
}
//是否登录   每次判断获取用户信息req.session.user
routers.get("/", checkUserLogin);
routers.get("/", function(req, res) {
    res.render("./admin/adindex.html", {
        usermessage: req.session.user //登陆后登录信息保存在req.session.user
    })
});
//教学计划数据提交
//是否登录   每次判断获取用户信息req.session.user
routers.post("/", checkUserLogin);
routers.post("/", function(req, res) {
    //console.log(data.count)
    var scourse = new Scourse({
        cno: req.body.cno,
        cname: req.body.cname,
        nature: req.body.nature,
        profession: req.body.profession,
        cydates: req.body.cydates,
        cftimes: req.body.cftimes,
        csmajor: req.body.csmajor,
        grade: req.body.grade
    });
    // console.log(scourse)
    Scourse.addCourse(scourse, function(err, data) {
        // console.log(data);
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        res.send({ "success": true });

    })

})

//教学计划录入信息浏览
//是否登录   每次判断获取用户信息req.session.user
routers.get("/aentry", checkUserLogin);
routers.get("/aentry", function(req, res) {
    Scourse.queryCourse(function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        let datas = {
            results: result
        }
        res.render("./admin/aentry.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.results
        })
    })
});

//开设课程信息浏览
routers.get("/aopen", checkUserLogin);
routers.get("/aopen", function(req, res) {
    Course.allCourse(function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        let datas = {
            results: result
        }
        res.render("./admin/aopen.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.results
        })
    })
});





//档案管理
//是否登录   每次判断获取用户信息req.session.user
routers.get("/tesearch", checkUserLogin);
routers.get("/tesearch", function(req, res) {

    Message.detemessage(req.query.id, function(err, results) {
        Message.queryCourse(function(err, results) {
            if (err) {
                return res.send({ "error": 403, "message": "数据库异常！" });
            }
            let datas = {
                tmessage: results
            };
            res.render("./admin/admessage.html", {
                usermessage: req.session.user, //登陆后登录信息保存在req.session.user
                data: datas.tmessage
            })

        });
    });
});

//是否登录   每次判断获取用户信息req.session.user
routers.get("/tesub", checkUserLogin);
routers.get("/tesub", function(req, res) {
    res.render("./admin/atemanage.html", {
        usermessage: req.session.user, //登陆后登录信息保存在req.session.user
    })
});
//是否登录   每次判断获取用户信息req.session.user
routers.post("/tesub", checkUserLogin);
routers.post("/tesub", function(req, res) {
    var message = new Message({
        username: req.body.username ? req.body.username : '',
        name: req.body.name ? req.body.name : '',
        cno: req.body.cno,
        cname: req.body.cname ? req.body.cname : '',
        registration: req.body.registration ? req.body.registration : ''
    });

    Message.addMessage(message, function(err, data) {
        // console.log(data);
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        res.send({ "success": true });


    })
})

//是否登录   每次判断获取用户信息req.session.user
routers.get("/maintenance", checkUserLogin);
routers.get("/maintenance", function(req, res) {
    User.deteacher(parseInt(req.query.id), function(err, results) {
        User.queryUserMessage(function(err, result) {
            if (err) {
                return res.send({ "error": 403, "message": "数据库异常！" });
            }
            let datas = {
                tmessage: result
            };
            res.render("./admin/ateacher.html", {
                usermessage: req.session.user, //登陆后登录信息保存在req.session.user
                data: datas.tmessage
            })
        });

    });
});

//教学信息管理
routers.get("/tecmessage", checkUserLogin);
routers.get("/tecmessage", function(req, res) {
    Tcresult.dallTcresult(function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" })
        }
        let datas = {
            ts: result
        }
        res.render("./admin/tecmessage.html", {
            //随意命名参数:数据
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.ts
        });
    })
});
//批量删除
routers.post("/tecmessage/del", checkUserLogin);
routers.post("/tecmessage/del", function(req, res) {
    Tcresult.delTcresult(function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" })
        }
        res.send({ "success": true });
    })
});


//信息维护  修改信息
//是否登录   每次判断获取用户信息req.session.user
routers.get("/teupdate", checkUserLogin);
routers.get("/teupdate", function(req, res) {
    User.queryId(parseInt(req.query.id), function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        res.render("./admin/teupdate.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            usermessages: result
        })
    })
});

//是否登录   每次判断获取用户信息req.session.user
routers.post("/teupdate", checkUserLogin);
routers.post("/teupdate", function(req, res) {
    User.updateTeacher(req.body.username, req.body.name, req.body.password, req.body.mobile, function(err, data) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        res.send({ "success": true });
    });
});



//是否登录   每次判断获取用户信息req.session.user
routers.get("/teacher/add", checkUserLogin);
routers.get("/teacher/add", function(req, res) {
    res.render("./admin/addte.html", {
        usermessage: req.session.user //登陆后登录信息保存在req.session.user
    })
});
//是否登录   每次判断获取用户信息req.session.user
routers.post("/teacher/add", checkUserLogin);
routers.post("/teacher/add", function(req, res) {
    User.countTeacher(function(err, data) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        // console.log(data.count)
        var user = new User({
            id: Number(data.count) + 1,
            username: req.body.username ? req.body.username : '',
            password: req.body.password ? req.body.password : '',
            name: req.body.name ? req.body.name : '',
            sex: req.body.sex ? req.body.sex : '',
            birthday: req.body.birthday ? req.body.birthday : '',
            mobile: req.body.mobile ? req.body.mobile : '',
            duty: req.body.duty ? req.body.duty : '教师',
            mid: req.body.mid ? req.body.mid : '',
        });
        // console.log(user)
        User.addteacher(user, function(err, dats) {
            // console.log(dats)
            if (err) {
                return res.send({ "error": 403, "message": "数据库异常！" });
            }
            res.send({ "success": true });

        })

    })
});


//公告
//是否登录   每次判断获取用户信息req.session.user
routers.get("/announcement", checkUserLogin);
routers.get("/announcement", function(req, res) {
    Anment.detemessage(parseInt(req.query.id), function(err, results) {
        Anment.queryMessage(function(err, result) {
            if (err) {
                return res.send({ "error": 403, "message": "数据库异常！" });
            }
            let datas = {
                tmessage: result
            };
            res.render("./admin/aannounce.html", {
                usermessage: req.session.user, //登陆后登录信息保存在req.session.user
                data: datas.tmessage
            })
        });

    });
});

//公告添加
//是否登录   每次判断获取用户信息req.session.user
routers.get("/announcement/add", checkUserLogin);
routers.get("/announcement/add", function(req, res) {
    res.render("./admin/addanounce.html", {
        usermessage: req.session.user //登陆后登录信息保存在req.session.user
    })
});
//是否登录   每次判断获取用户信息req.session.user
routers.post("/announcement/add", checkUserLogin);
routers.post("/announcement/add", function(req, res) {
    Anment.countMessage(function(err, data) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        // console.log(data.count)
        var anment = new Anment({
            id: Number(data.count) + 1,
            title: req.body.title ? req.body.title : '',
            dates: req.body.dates ? req.body.dates : '',
            content: req.body.content ? req.body.content : ''
        });
        //  console.log(anment)
        Anment.addMessage(anment, function(err, dats) {
            // console.log(dats)
            if (err) {
                return res.send({ "error": 403, "message": "数据库异常！" });
            }
            res.send({ "success": true });

        })

    })
});



//3.把路由导出
module.exports = routers;