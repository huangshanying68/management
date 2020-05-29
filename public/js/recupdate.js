function upTmessage(flag) {
    let username = $('[name="username"]').val();
    let name = $('[name="name"]').val();
    let mid = $('[name="mid"]').val();

    $.ajax({
        url: "/research/cmanagement/recupdate",
        type: "post",
        data: {
            flag: flag,
            username: username,
            name: name,
            mid: mid
        },
        dataType: "json",
        success: function(response) {
            console.log(response)
            if (response.success) {
                window.alert("提交成功!");
                window.location.href = '/research/cmanagement';
            } else {
                window.alert(response.message);
            }


        }
    })
}