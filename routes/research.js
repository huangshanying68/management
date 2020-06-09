var express = require("express");
var User = require('../models/user.js');
var Anment = require("../models/announcement.js");
var Course = require("../models/course.js")
var Scourse = require('../models/scourse.js')
var Thcourse = require('../models/tchcourse.js')
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

//教学信息管理 
//是否登录   每次判断获取用户信息req.session.user
routers.get("/teaching", checkUserLogin);

//根据教研所属专业显示专业的课程数据
routers.get("/teaching", function(req, res) {
    Scourse.GetMessage(req.session.user.mid, function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        let datas = {
            tmessage: result
        };
        res.render("./research/reteaching.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.tmessage
        })
    })

})

//教学信息管理  

// 把数据添加到course 删除scourse
//是否登录   每次判断获取用户信息req.session.user
routers.post("/teaching/recfirm", checkUserLogin);

routers.post("/teaching/recfirm", function(req, res) {
    //console.log(data.count)
    var course = new Course({
        cno: req.body.cno,
        cname: req.body.cname,
        nature: req.body.nature,
        profession: req.body.profession,
        cydates: req.body.cydates,
        cftimes: req.body.cftimes,
        csmajor: req.body.csmajor
    });
    Course.addCourse(course, function(err, data2) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        Scourse.delScourse(req.body.cno, function(err, result) {
            if (err) {
                res.send({ "error": 403, "message": "数据库异常！" });
            }
            res.send({ "success": true });

        })
    })

})

//删除(取消)课程
//是否登录   每次判断获取用户信息req.session.user
routers.post("/teaching/recdel", checkUserLogin);
routers.post("/teaching/recdel", function(req, res) {
    Scourse.delScourse(req.body.cno, function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" });
        }
        res.send({ "success": true });

    })

})


//开课信息浏览 
//是否登录   每次判断获取用户信息req.session.user
routers.get("/copen", checkUserLogin);

//根据教研所属专业显示专业的课程数据
routers.get("/copen", function(req, res) {
    Course.GetMessage(req.session.user.mid, function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        let datas = {
            tmessage: result
        };
        res.render("./research/recopen.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.tmessage
        })
    })

})

//课程管理
//是否登录   每次判断获取用户信息req.session.user
routers.get("/cmanagement", checkUserLogin);

//根据教师的专业是否是课程所属专业来显示数据
routers.get("/cmanagement", function(req, res) {
    Thcourse.queryThcourse(req.session.user.mid, function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        let datas = {
            tmessage: result
        };
        res.render("./research/cmanagement.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.tmessage
        })
    })

})

//课程管理 确认教师
//是否登录   每次判断获取用户信息req.session.user
routers.post("/cmanagement/recfirm", checkUserLogin);
routers.post("/cmanagement/recfirm", function(req, res) {
        let tcresult = new Tcresult({
            flag: req.body.flag,
            username: req.body.username,
            name: req.body.name,
            mid: req.body.mid,
            cname: req.body.cname,
            cno: req.body.cno,
            csmajor: req.body.csmajor,
            cydates: req.body.cydates,
            profession: req.body.profession
        });
        console.log(tcresult)
        Tcresult.addTcresult(tcresult, function(err, result) {
            if (err) {
                res.send({ "error": 403, "message": "数据库异常！" });
            }
            res.send({ "success": true });

        })

    })
    //课程管理 删除教师 即让教师的账号、姓名为空
    //是否登录   每次判断获取用户信息req.session.user
routers.post("/cmanagement/recdel", checkUserLogin);
routers.post("/cmanagement/recdel", function(req, res) {
    Thcourse.delThcourse(req.body.flag, function(err, result) {
        if (err) {
            res.send({ "error": 403, "message": "数据库异常！" });
        }
        res.send({ "success": true });

    })

})

//课程管理 修改教师 即为课程添加教师

//是否登录   每次判断获取用户信息req.session.user
routers.get("/cmanagement/recupdate", checkUserLogin);
routers.get("/cmanagement/recupdate", function(req, res) {
    Thcourse.queryFlag(req.query.id, function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        res.render("./research/recupdate.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: result
        })

    })
})



//课程管理信息浏览
//是否登录   每次判断获取用户信息req.session.user
routers.get("/rechoset", checkUserLogin);

//根据教师的专业是否是课程所属专业来显示数据
routers.get("/rechoset", function(req, res) {
    Tcresult.tProfession(req.session.user.mid, function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        let datas = {
            tmessage: result
        };
        res.render("./research/rechoset.html", {
            usermessage: req.session.user, //登陆后登录信息保存在req.session.user
            data: datas.tmessage
        })
    })

})


//是否登录   每次判断获取用户信息req.session.user
routers.post("/cmanagement/recupdate", checkUserLogin);
routers.post("/cmanagement/recupdate", function(req, res) {
    Thcourse.findThcourse(req.body.username, req.body.name, req.body.mid, req.body.flag, function(err, result) {
        if (err) {
            return res.send({ "error": 403, "message": "数据库异常！" });
        }
        Tcresult.movTcresult(req.body.flag, function(err, result) {
            if (err) {
                return res.send({ "error": 403, "message": "数据库异常！" });
            }
            res.send({ "success": true });
        })

    })

})


//3.把路由导出
module.exports = routers;