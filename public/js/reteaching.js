function recfirm(id, cname, nature, profession, cydates, cftimes, csmajor) {

    // console.log(id)
    // console.log(cname);
    // console.log(csmajor);
    // console.log(typeof cname);
    $.ajax({
        url: "/research/teaching/recfirm",
        type: "post",
        dataType: "json",
        data: {
            id: id,
            cname: cname,
            nature: nature,
            profession: profession,
            cydates: cydates,
            cftimes: cftimes,
            csmajor: csmajor
        },
        success: function(response) {
            if (response.success) {
                window.alert("提交成功")
                location.reload();
            } else {
                window.alert("提交失败");
            }
        }
    })
}

function recdel(id) {
    $.ajax({
        url: "/research/teaching/recdel",
        type: "post",
        dataType: "json",
        data: {
            id: id
        },
        success: function(response) {
            if (response.success) {
                window.alert("删除成功")
                location.reload();
            } else {
                window.alert("删除失败");
            }
        }
    })
}