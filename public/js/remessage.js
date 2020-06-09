window.onload = function() {
    output();

}

function output() {
    //获取选中的文本框的值
    let cydates = $("#cprofession option:selected").text();
    console.log(cydates)
        // 声明变量 
    let table, tr, td4, i;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // 循环表格每一行，查找匹配项 
    for (i = 0; i < tr.length; i++) {
        td4 = tr[i].getElementsByTagName("td")[4];
        if (td4) {
            if (td4.innerHTML == cydates) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}