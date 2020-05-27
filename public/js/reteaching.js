window.onload = function() {
    let i, tr, td, td1, td2;
    let reg = new RegExp('"', "g");
    let table = document.getElementById("semessage");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[6];
        //去掉双引号
        td1 = td.innerHTML.replace(reg, "");
        td2 = formatDateTime(td1);
        td.innerHTML = td2;

    }

    function formatDateTime(inputTime) {
        let date = new Date(inputTime);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let minute = date.getMinutes();
        let second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    }

};

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