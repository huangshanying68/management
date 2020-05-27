$(function() {
    $("#adteacher").on("submit", function(datas) {
        //执行与事件关联的默认动作
        datas.preventDefault();
        //serialize()序列化表单
        var formData = $(this).serialize(); //this:#login_form   获取表单数据 表单必须有ID
        $.ajax({
            url: "/admin/teacher/add",
            type: "post",
            data: formData,
            dataType: "json",
            success: function(response) {
                console.log(response)
                if (response.success) {
                    window.alert("提交成功!");
                    window.location.href = '/admin/maintenance';
                } else {
                    window.alert(response.message);
                    $(":input", "#addcourse").val(" ");
                }


            }
        })
    })
})