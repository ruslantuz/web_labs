var images = document.getElementsByTagName("img");

var firstImage = images[0];
var viewBtn = document.getElementById("viewBtn");
var clearBtn = document.getElementById("clearBtn");

var width = 0;
var height = 0;
var borderThickness = 0;
var hint = "";



function setValue(elem){
    switch (elem.name){
        case("width"):
            width = elem.value;
            break;
        case("height"):
            height = elem.value;
            break;
        case("border_thickness"):
            borderThickness = elem.value;
            break;
        case("hint"):
            hint = elem.value;
            break;

    }
    console.log(elem.value);
}
function swapImages(){
    var swapNumbers = document.getElementsByName("swap_numbers");
    console.log(swapNumbers);
    for (var i = 0; i < 2; i++){
        if (swapNumbers[i].value < swapNumbers[i].min) swapNumbers[i].value=swapNumbers[i].min;
        else if (swapNumbers[i].value > swapNumbers[i].max) swapNumbers[i].value=swapNumbers[i].max;
    }
    var temp = images[swapNumbers[1].value-1].src;
    console.log(temp);
    images[swapNumbers[1].value-1].src = images[swapNumbers[0].value-1].src;
    images[swapNumbers[0].value-1].src = temp;
}

viewBtn.onclick = ()=>{
    if (width > 0){
        firstImage.style.width = width + "px";
    }
    if (height > 0){
        firstImage.style.height = height + "px";
    }
    if (borderThickness > 0){
        firstImage.style.border = borderThickness + "px solid black";
    }
    if(hint){
        firstImage.title = hint;
        firstImage.alt = hint;
    }
    swapImages();
}