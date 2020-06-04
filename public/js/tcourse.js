function searchs() {
    let cname = $('[name="cname"]').val();
    let cnature = $('[name="cnature"]').val();
    //获取选中的文本框的值
    let csmajor = $("#cprofession option:selected").text();
    // console.log(csmajor)
    // 声明变量 
    let table, tr, td1, td2, td4, i;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // 循环表格每一行，查找匹配项 
    for (i = 0; i < tr.length; i++) {
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
        td4 = tr[i].getElementsByTagName("td")[4];
        if (td1 || td2 || td4) {
            if (td1.innerHTML.indexOf(cname) > -1 && td2.innerHTML.indexOf(cnature) > -1 && td4.innerHTML.indexOf(csmajor) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function chdel(cno, cname, csmajor, profession, cydates) {
    $.ajax({
        url: "/teacher/course/chdel",
        type: "post",
        dataType: "json",
        data: {
            cno: cno,
            cname: cname,
            csmajor: csmajor,
            profession: profession,
            cydates: cydates
        },
        success: function(response) {
            if (response.success) {
                window.alert("选课成功")
                window.location.href = "/teacher/course"
            } else {
                window.alert("选课失败");
            }
        }
    })
}