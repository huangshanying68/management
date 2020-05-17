var db = require('./db.js');

function Course(course) {
    this.id = course.id;
    this.cname = course.cname;
    this.nature = course.nature;
    this.profession = course.profession;
    this.cydates = course.cydates;
    this.cftimes = course.cftimes;
    this.csmajor = course.csmajor;
    this.capacity = course.capacity;
    this.cteachers = course.cteachers;
};
//获取课程所有信息
Course.queryCourse = function(callback) {
    var selectSql = "select * from course";
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result; //数组
        callback(err, data);
    });
};
//根据专业编号获取专业名称
/*Course.getCourse = function(callback) {
    var selectSql = 'select * from major ';
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    });
};*/
//模糊搜索  https://blog.csdn.net/qq_38263083/article/details/81944370
Course.querySearch = function(courses, callback) {
    var selectSql = "select * from course WHERE 1=1"; //WHERE 1=1判断用户填入的条件参数不为null以及除去空格不为空，满足该条件后，使用sql语句拼凑。
    //创建一个ArrayList，用来装载参数值
    // var param = new Array();
    let param = [];
    if (courses.cname != '') {
        courses.cname = '%" + courses.cname + "%';
        selectSql = selectSql + " and cname like ? ";
        // param[0] = '%' + courses.cname + '%';
        param.push(courses.cname);
    }
    if (courses.nature != '') {
        courses.nature = '%" + courses.nature + "%';
        selectSql = selectSql + "and nature like ?";
        // param[param.length] = '%' + courses.nature + '%';
        param.push(courses.nature);
    }
    if (courses.profession != '') {
        if (courses.profession == "计算机科学与技术") {
            courses.profession = '%计算机科学与技术%';
            selectSql = selectSql + "and profession like ?";
            param.push(courses.profession);
        } else if (courses.profession == "软件工程") {
            courses.profession = '%软件工程%';
            selectSql = selectSql + "and profession like ?";
            param.push(courses.profession);
        } else if (courses.profession == "信息安全") {
            courses.profession = '%信息安全%';
            selectSql = selectSql + "and profession like ?";
            param.push(courses.profession);
        } else if (courses.profession == "智能科学与技术") {
            courses.profession = '%智能科学与技术%';
            selectSql = selectSql + "and profession like ?";
            param.push(courses.profession);
        }
    }
    db.query(selectSql, param, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    })

};

//通过id获取信息
Course.GetMessage = function(id, callback) {
    var selectSql = 'select * from course where id = ?';
    db.query(selectSql, [id], function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
};

//获取总数
Course.countCourse = function(callback) {
    var selectSql = 'SELECT count(id) as count FROM course ';
    db.query(selectSql, function(err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
};

//添加信息
Course.addCourse = function(course, callback) {
    var selectSql = 'insert into course (id,cname,nature,profession,cydates,cftimes,csmajor)  values (?,?,?,?,?,?,?)';
    db.query(selectSql, [course.id, course.cname, course.nature, course.profession, course.cydates, course.cftimes, course.csmajor], function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(err, result);
    });
};

//通过id删除数据
Course.delCourse = function(id, callback) {
        var selectSql = 'DELETE FROM course WHERE  id =?';
        db.query(selectSql, [id], function(err, result) {
            if (err) {
                return callback(err);
            }
            callback(err, result);
        });
    }
    //3.把路由导出
module.exports = Course;