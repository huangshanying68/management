$(function() {
    $("#messubmit").on("click", function() {
        console.log(56555655);
        var username = $('[name="username"]').val();
        var name = $('[name="name"]').val();
        var cname = $('[name="cname"]').val();
        var registration = $('input[name="tesub"]:checked').val(); //获取选中的单选的值

        $.ajax({
            url: "/admin/tesub",
            type: "post",
            data: {
                username: username,
                name: name,
                cname: cname,
                registration: registration
            },
            dataType: "json",
            success: function(response) {
                console.log(response)
                if (response.success) {
                    window.alert("提交成功!");
                    window.location.href = '/admin/tesub';
                } else {
                    window.alert(response.message);
                    $(":input", "#temessages").val(" ");
                }


            }
        })
    })
})