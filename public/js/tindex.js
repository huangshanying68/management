$(function() {

    /**
     * 获取用户列表
     */
    $.ajax({
        url: '/teacher/',
        type: 'get',
        data: "",
        success: function(response) {
            if (response.error == 400) {
                window.alert(response.message);
            }
        }
    });
});