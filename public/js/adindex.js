$(function() {
    $("#addcourse").on("submit", function(datas) {
        console.log(datas)
            //执行与事件关联的默认动作
        datas.preventDefault();
        //serialize()序列化表单
        var formData = $(this).serialize(); //this:#login_form   获取表单数据 表单必须有ID
        /* var cname = $('[name="cname"]').val();
         var nature = $('[name="nature"]').val();
         var profession = $('[name="profession"]').val();
         var cydates = $('[name=" cydates"]').val();
         var cftimes = $('[name="cftimes"]').val();
         var csmajor = $('[name="csmajor"]').val();
         console.log(cydates)
         var datas = {
             cname: cname,
             nature: nature,
             profession: profession,
             cydates: cydates,
             cftimes: cftimes,
             csmajor: csmajor
         };
         console.log(datas)*/

        $.ajax({
            url: "/admin/",
            type: "post",
            data: formData,
            dataType: "json",
            success: function(response) {
                console.log(response)
                if (response.success) {
                    window.alert("提交成功!");
                    window.location.href = '/admin/';
                } else {
                    window.alert(response.message);
                    $(":input", "#addcourse").val(" ");
                }


            }
        })
    })
})