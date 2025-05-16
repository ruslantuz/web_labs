
alert("Привіт!");
if(confirm("Ви бажаєте відкрити попередню лабораторну роботу?")){
    window.open("lab13.html","displaywind", "width=500, height=400, left=200px, top=100px, status=no, location=no, menubar=no");
}

function reg(obj){
    obj.regt.value=prompt("Введіть Ваше ім'я",""); 
}

document.getElementById("regbtn").onclick = () => {
    reg(form1);
    return false;
}


function closeWindow(){
    if(confirm("Ви справді бажаєте закрити вікно?")){
        window.close();
    }
}
