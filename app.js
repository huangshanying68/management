/**app职责
 *创建服务
 *做一些服务相关配置
 *模板引擎
 *body-parser 解析表单 post请求体
 *挂载路由
 *监听端口启动服务
 */
//引包  下载的包
var express = require("express");
//路径操作
var path = require("path");
//错误标记
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

//引用user.js  得到导出的routers
var user = require('./routes/user');
var teacher = require('./routes/teacher.js');
var admin = require('./routes/admin')
var research = require('./routes/research.js')
var ledmin = require('./routes/ledmin.js')

var bodyParser = require("body-parser");
var session = require('express-session');

//创建服务器应用程序   相当于http.createServer
var app = express();

/*把资源变成公共资源 静态资源   
path.join：动态绝对路径径只要有路径用这个   
去node看  解决路径问题 ./node_modules/ 有没有.都行  
*/
app.use('/node_modules/', express.static(path.join(__dirname, "./node_modules/")));
app.use("/public/", express.static(path.join(__dirname, "./public/")));
app.use("/routes/", express.static(path.join(__dirname, "./routes/")));
app.use(logger('dev'));
/*
 *配置body-parser  一定要在 app.use(router);之前 即挂载路由之前
 *只要加入这个配置，则在req请求对象上会多出一个属性：body
 *即可以直接通过req.body获取表单post请求体数据了
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//配置中间件
app.use(session({
    secret: 'keyboard cat',
    name: 'seName',
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000, //设置session的有效期为1周
    }, //cookie有效时间（毫秒)
    resave: false, //强制保存session
    saveUninitialized: true //是否保存初始化的session
}));

/*配置art-template模板引擎 
 *用html 不然得改文件.html为第一个参数
 */
app.engine('html', require('express-art-template'));

// 默认是./views目录
app.set('views', path.join(__dirname, "./views/"))

//把路由容器挂载到app服务中 
/*  路由匹配   
  *路径以/login  路由对象require('./routes/user')
app.use('/user', user);以/user为父路由  假设他子路由有/one   则在user.js里有/one
*/
app.use('/user', user);
app.use('/teacher', teacher);
app.use('/admin', admin);
app.use('/research', research)
app.use('/ledmin', ledmin)

//路由匹配不到 输出404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//判断是否是当前的开发环境
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}
//处理错误的中间件
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});

//相当于server.listen
app.listen(5050, function() {
    console.log("5050 is running")

});

//把app当做首个文件来加载
module.exports = app;