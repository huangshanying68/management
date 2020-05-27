function addsubmit() {
    let cno = $.trim($('[name="cno"]').val());
    let cname = $.trim($('[name="cname"]').val());
    let nature = $.trim($('[name="nature"]').val());
    let profession = $.trim($('[name="profession"]').val());
    let cydates = $.trim($('[name="cydates"]').val());
    let cftimes = $.trim($('[name="cftimes"]').val());
    let csmajor = $.trim($('[name="csmajor"]').val());
    $.ajax({
        url: "/admin/",
        type: "post",
        data: {
            cno: cno,
            cname: cname,
            nature: nature,
            profession: profession,
            cydates: cydates,
            cftimes: cftimes,
            csmajor: csmajor
        },
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
}