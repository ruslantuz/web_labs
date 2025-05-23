var options = document.getElementsByName("courseOpt");
var sumElement = document.getElementById("costSum");

for(opt of options){
    opt.setAttribute("onclick", "clickFunc()");
}

function clickFunc(){
    var sumValue = 0;
    options.forEach(elem => {
        if (elem.checked){
            sumValue += parseInt(elem.value);
        }
    })
    sumElement.textContent = "Вартість вибраних курсів: " + sumValue + " грн"

}


