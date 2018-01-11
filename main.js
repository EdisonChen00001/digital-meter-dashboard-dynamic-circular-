function changeDigitalValue() {
    var fisrtRandomValue,secondRandomValue,thirdRandomValue;
    fisrtRandomValue = parseInt((Math.random())*100);
    secondRandomValue = parseInt((Math.random())*100);
    thirdRandomValue = parseInt((Math.random())*100);
    document.getElementById("firstValue").innerHTML = fisrtRandomValue +"%";
    document.getElementById("secondValue").innerHTML = secondRandomValue +"%";
    document.getElementById("thirdValue").innerHTML = thirdRandomValue+"%";

    var fisrtElement = document.getElementById("firstStrokeValue");
    var secondElement = document.getElementById("secondStrokeValue");
    var thirdElement = document.getElementById("thirdStrokeValue");

    fisrtElement.style.strokeDasharray = fisrtRandomValue+",100";
    secondElement.style.strokeDasharray = secondRandomValue+",100";
    thirdElement.style.strokeDasharray = thirdRandomValue+",100";
}
