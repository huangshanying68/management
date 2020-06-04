$(function() {
    /*
     *给修改密码按钮添加点击事件
     *获取用户输入信息
     *判断用户是否输入正确
     *调用修改接口
     *成功跳转到登录界面
     */
    $("#cPassword").on("click", function() {
        //去掉输入空格 $.trim()
        var oldPasswords = $.trim($('[name="oldPassword"]').val());
        var newPasswords = $.trim($('[name="newPassword"]').val());
        var conPasswords = $.trim($('[name="conPassword"]').val());
        if (!oldPasswords) {
            window.alert("原密码不可为空");
            //清空
            $('[name="oldPassword"]').val('');

        }
        if (!newPasswords) {
            window.alert("新密码不可为空");
            $('[name="newPassword"]').val('');

        }
        if (conPasswords != newPasswords) {
            window.alert("输入不一致");
            $('[name="conPassword"]').val('');

        }
        $.ajax({
            url: "/teacher/tecpasword",
            type: "post",
            data: {
                //传至后端数据命名：值     后端数据:req.body.oldPassword、
                oldPassword: oldPasswords,
                newPassword: newPasswords
            },
            dataType: "json",
            success: function(response) {
                if (response.success) {
                    window.alert("修改成功！");
                    window.location.href = "/user/login"

                } else {
                    window.alert(response.message);
                    window.location.href = "/teacher/tecpasword"
                }
            }
        })


    });
})