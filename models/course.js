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
    var param = new Array();
    if (courses.cname) {
        selectSql = selectSql + " and cname like ? ";
        param[0] = '%' + courses.cname + '%';
    }
    if (courses.nature) {
        selectSql = selectSql + "and nature like ?";
        param[param.length] = '%' + courses.nature + '%';
    }
    if (courses.profession) {
        selectSql = selectSql + "and profession  like ?";
        param[param.length] = '%' + courses.profession + '%';
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

//添加信息
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


/*Product.queryProductDetailList= function (product, page, callback) {
  var selectSql = "SELECT * FROM product WHERE 1=1 ";
  var param = new Array();
  if (product.proName) {
    selectSql = selectSql + " AND  proName LIKE ? ";
    param[0] = '%' + product.proName + '%';
  }
  if (product.brandId) {
    selectSql = selectSql + " AND  brandId =? ";
    param[param.length] = product.brandId;
  }
  if (product.price) {
    if (product.price == 1) selectSql = selectSql + " ORDER BY price ";
    if (product.price == 2) selectSql = selectSql + " ORDER BY price DESC ";
  }
  else if (product.num) {
    if (product.num == 1) selectSql = selectSql + " ORDER BY num ";
    if (product.num == 2) selectSql = selectSql + " ORDER BY num DESC ";
  }else{
      selectSql = selectSql + " ORDER BY id DESC ";
  }
  selectSql = selectSql + " LIMIT ?,?";
  param[param.length] = (page.page - 1) * page.size;
  param[param.length] = page.size;
  console.log(selectSql);
  console.log(param);
  db.query(selectSql, param, function (err, result) {
    if (err) {
      return callback(err);
    }
    var data = result;
    callback(err, data);
  });
};
Product.countProductDetailList = function (callback) {
    var selectSql = 'SELECT count(id) as count FROM product WHERE 1=1';
    db.query(selectSql, function (err, result) {
        if (err) {
            return callback(err);
        }
        var data = result[0];
        callback(err, data);
    });
};*/
//3.把路由导出
module.exports = Course;