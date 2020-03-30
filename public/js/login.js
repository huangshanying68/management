/*
 *给登录添加点击事件
 *获取输入信息
 *调用接口
 *成功跳转*/
$("#login_form").on("submit", function(datas) {
    //执行与事件关联的默认动作
    datas.preventDefault();
    ////去掉空格$.trim
    var usernames = $.trim($('[name="username"]').val());
    var passwords = $.trim($('[name="password"]').val());
    if (!usernames) {
        window.alert("用户名不可为空");
    }
    if (!passwords) {
        window.alert("密码不可为空");
        //清空
        $('[name="password"]').val('');
    }
    //serialize()序列化表单
    var formData = $(this).serialize(); //this:#login_form   获取表单数据 表单必须有ID
    $.ajax({
        url: "/user/login",
        type: "post",
        data: formData,
        dataType: "json",
        success: function(response) {
            if (response.success) {
                //保存数据至session
                //sessionStorage.anmessage=response.username;
                //得到后端roles数据
                var role = response.roles;
                if (role == "教师") {
                    window.location.href = '/teacher/';
                } else if (role == "教秘") {
                    window.location.href = '/admin/';
                } else {
                    window.location.href = '/arg/login';
                }
            } else {
                alert(response.message);
                window.location.href = '/user/login';
            }
        }

    });
});