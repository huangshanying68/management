function recfirm(cno, cname, nature, profession, cydates, cftimes, csmajor) {
    $.ajax({
        url: "/research/teaching/recfirm",
        type: "post",
        dataType: "json",
        data: {
            cno: cno,
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
                window.location.href = "/research/teaching"
            } else {
                window.alert("提交失败");
            }
        }
    })
}

function recdel(cno) {
    $.ajax({
        url: "/research/teaching/recdel",
        type: "post",
        dataType: "json",
        data: {
            cno: cno
        },
        success: function(response) {
            if (response.success) {
                window.alert("删除成功")
                window.location.href = "/research/teaching"
            } else {
                window.alert("删除失败");
            }
        }
    })
}