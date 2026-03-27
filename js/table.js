
function adddata()
{
    var table = document.getElementById('table')
    // console.log(table);
    //插入的位置
    var length = table.rows.length;
    // console.log(length)
    //插入的行节点
    var newrow = table.insertRow(length)
    // console.log(newrow);
    var namecol = newrow.insertCell(0);
    var phonecol = newrow.insertCell(1);
    var actioncol = newrow.insertCell(2);
    namecol.innerHTML = '未命名';
    phonecol.innerHTML = '123456';
    actioncol.innerHTML = '<button onclick="editdata(this)">编辑</button><button onclick="deletedata(this)">删除</button>'
}
function deletedata(button)
{
    // console.log(button);
    var row = button.parentNode.parentNode;
    // console.log(row);
    row.parentNode.removeChild(row);
}
function editdata(button)
{
    // console.log(button)
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var phone = row.cells[1];

    var inputName = prompt("请输入名字")
    var inputPhone = prompt("请输入电话")
    name.innerHTML = inputName
    phone.innerHTML = inputPhone
}