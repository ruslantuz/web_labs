var calcBtn = document.getElementById("calcBtn");

var result = document.getElementById("result");

calcBtn.onclick = ()=>{
    var selectedOption = document.querySelector(`input[name=calcOption]:checked`).value;
    var radius = form1.radius.value;
    if(radius < 0){
        result.textContent = "Введіть додатнє значення!";
        return 1;
    }
    
    switch (selectedOption){
        case ("square"):
            result.textContent = "Площа круга: " + Math.PI * Math.pow(radius,2);
            break;
        case("length"):
            result.textContent = "Довжина кола: " + 2 * Math.PI * radius;
            break;
        case("volume"):
            result.textContent = "Об'єм кулі: " + 4/3 * Math.PI * Math.pow(radius,3);
            break;
        case("surface"):
            result.textContent = "Площа поверхні сфери: " + 4 * Math.PI *  Math.pow(radius,2);
            break;
    }
}

