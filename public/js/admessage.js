function searchs() {
    var username = $.trim($('[name="username"]').val());
    console.log(username)
    $.ajax({
        url: "/admin/teacher/searchs",
        type: "get",
        data: {
            username: username
        },
        dataType: "json",
        success: function(response) {
            //搜索显示结果的方法
            // let data = response.data;

            // var tr;
            // tr = '<td>' + data.username + '</td>' + '<td>' + data.name + '</td>' + '<td>' + data.password + '</td>' + '<td>' + data.sex + '</td>'
            // $("#tabledata").append('<tr>' + tr + '</tr>')


        }
    })
}