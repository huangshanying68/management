function allDel() {

    $.ajax({
        url: "/admin/tecmessage/del",
        type: "post",
        success: function(response) {
            console.log(response)
            if (response.success) {
                window.alert("删除成功!");
                window.location.href = '/admin/tecmessage';
            } else {
                window.alert(response.message);
            }


        }
    })
}