function recdel(cno) {
    $.ajax({
        url: "/teacher/decourse/recdel",
        type: "post",
        dataType: "json",
        data: {
            cno: cno
        },
        success: function(response) {
            if (response.success) {
                window.location.href = "/teacher/decourse"
            } else {
                window.alert("取消失败");
            }
        }
    })
}