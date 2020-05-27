function upTmessage() {
    var username = $('[name="usernames"]').val();
    var name = $('[name="name"]').val();
    var password = $('[name="password"]').val();
    var mobile = $('[name="mobile"]').val();
    console.log(username);
    console.log(name);
    console.log(password);
    console.log(mobile);
    $.ajax({
        url: "/admin/teupdate",
        type: "post",
        data: {
            username: username,
            name: name,
            password: password,
            mobile: mobile
        },
        dataType: "json",
        success: function(response) {
            console.log(response)
            if (response.success) {
                window.alert("提交成功!");
                window.location.href = '/admin/maintenance';
            } else {
                window.alert(response.message);
            }


        }
    })
}