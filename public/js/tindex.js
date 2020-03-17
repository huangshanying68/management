$(function(){

	/**
	 * 获取用户列表
	 */
	$.ajax({
		url: '/teacher/',
		type: 'get',
		data:sessionStorage.anmessage,
		success: function(res) {
			console.log(res);	
		}
	});
});
