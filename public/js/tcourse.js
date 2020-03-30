$(function() {
    /*
     *给查询按钮添加点击事件
     *获取用户输入信息
     *调用接口
     */
    $("#search").on("click", function() {
        var cname = $('[name="cname"]').val();
        var nature = $('[name="cnature"]').val();
        //获取选中项的文本值
        var profession = $("#cprofession").find("option:selected").text();
        $.ajax({
            url: "/teacher/course",
            type: "get",
            dataType: "json",
            data: {
                //传至后端数据命名：值     后端数据:req.body.
                cnames: cname,
                natures: nature,
                professions: profession
            },
            success: function(resonse) {
                console.log(response);
            }

        })
    })
})