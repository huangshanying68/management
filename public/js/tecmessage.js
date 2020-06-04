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
window.onload = function() {
    output();

}

function output() {
    //获取选中的文本框的值
    let cydates = $("#cprofession option:selected").text();
    // 声明变量 
    let table, tr, td4, i;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // 循环表格每一行，查找匹配项 
    for (i = 0; i < tr.length; i++) {
        td4 = tr[i].getElementsByTagName("td")[6];
        if (td4) {
            if (td4.innerHTML == cydates) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}