var items = JSON.parse(localStorage.getItem('items'));
console.log(items)


table=document.getElementById("table")
console.log(table)
//items=[]
if (items.length>0)
{
items.forEach(function(item)
{
    let row=document.createElement("tr")
    row.innerHTML=`
        <td>${item.fName}</td>
        <td>${item.lName}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        <td>${item.h_edu}</td>
        <td>${item.study}</td>
        <td>${item.skils}</td>
        <td>${item.r_name}</td>
        <td>${item.r_contact}</td>
    
    `;
    table.appendChild(row)
})
}