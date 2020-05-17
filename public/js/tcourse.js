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
        if (cname == '') {
            cname = '';
        }
        if (nature == '') {
            nature = ''
        }
        if (profession == '') {
            profession = ''
        }
        // console.log(cname)
        // console.log(nature)
        // console.log(profession)
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
            success: function(response) {
                console.log(response);
            }

        })
    });
})

function chdel(id, cname, csmajor) {

    console.log(id)
    console.log(cname);
    console.log(csmajor);
    console.log(typeof cname);
    $.ajax({
        url: "/teacher/course/chdel",
        type: "post",
        dataType: "json",
        data: {
            id: id,
            cname: cname,
            csmajor: csmajor
        },
        success: function(response) {
            if (response.success) {
                window.alert("选课成功")
                location.reload();
            } else {
                window.alert("选课失败");
            }
        }
    })
}