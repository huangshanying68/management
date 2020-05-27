function myFunction() {
    let username = $('[name="username"]').val();
    // 声明变量 
    let table, tr, td, i;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // 循环表格每一行，查找匹配项 
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (username == '') {
                tr[i].style.display = "";
            }
        }
    }
}

function searchs() {
    let username = $('[name="username"]').val();
    // 声明变量 
    let table, tr, td, i;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // 循环表格每一行，查找匹配项 
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML == username || username == '') {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}