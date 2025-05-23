var options = document.getElementsByName("courseOpt");
var sumElement = document.getElementById("costSum");
var selectedOptsElement = document.getElementById("selectedOptions");

for(opt of options){
    opt.setAttribute("onclick", "clickFunc()");
}

function clickFunc(){
    var sumValue = 0;
    var selectedOptions = [];
    options.forEach(elem => {
        if (elem.checked){
            sumValue += parseInt(elem.value);
            selectedOptions.push(elem.nextSibling.textContent);
        }
    })
    sumElement.textContent = "Вартість вибраних курсів: " + sumValue + " грн";
    selectedOptsElement.innerHTML = "Вибрані курси: <br>";

    for (str of selectedOptions){
        selectedOptsElement.innerHTML += str + "<br>";
    }
}


