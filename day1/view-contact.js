formTable="<table > ";
formTable+="<tr> <th> Name </th> <th> Contact </th> </tr> <br> ";
let i = 0;
for (let key in localStorage){ 
    if (!localStorage.hasOwnProperty(key)){
        continue;
    } 
    rowTable=" <tr> <td> "+ key+" </td> <td> "+ localStorage.getItem(key) +" </td> </tr> <br> ";
    formTable+=rowTable;
    // console.log(key)
}
formTable+=" </table>";
// document.getElementsByClassName("view-contact").innerHTML=formTable;
document.getElementById("view-contact").innerHTML=formTable;