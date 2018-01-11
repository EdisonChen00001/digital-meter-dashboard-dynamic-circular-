

function changeDigitalValue() {
    var fisrtRandomValue,
        secondRandomValue,
        thirdRandomValue;

    var fisrtElement = document.getElementById("firstStrokeValue");
    var secondElement = document.getElementById("secondStrokeValue");
    var thirdElement = document.getElementById("thirdStrokeValue");

    fisrtRandomValue = parseInt((Math.random()) * 100);
    secondRandomValue = parseInt((Math.random()) * 100);
    thirdRandomValue = parseInt((Math.random()) * 100);

    document.getElementById("firstValue").innerHTML = fisrtRandomValue + "%";
    document.getElementById("secondValue").innerHTML = secondRandomValue + "%";
    document.getElementById("thirdValue").innerHTML = thirdRandomValue + "%";

    fisrtElement.style.strokeDasharray = fisrtRandomValue + ",100";
    secondElement.style.strokeDasharray = secondRandomValue + ",100";
    thirdElement.style.strokeDasharray = thirdRandomValue + ",100";
}

function changeDigitalColor() {
    var fisrtRandomColor,
        secondRandomColor,
        thirdRandomColor;


    var fisrtElement = document.getElementById("firstStrokeValue");
    var secondElement = document.getElementById("secondStrokeValue");
    var thirdElement = document.getElementById("thirdStrokeValue");

    fisrtRandomColor = fisrtElement.style.stroke = getRandomColor();
    secondRandomColor = secondElement.style.stroke = getRandomColor();
    thirdRandomColor = thirdElement.style.stroke = getRandomColor();

}

function getRandomColor() {
    var letters = '0123456789ABCDEF',
        color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var element = document.getElementById("animpath");
var pathLength = element.getTotalLength();

element.style.strokeDasharray = pathLength;
element.style.strokeDashoffset = pathLength;

function animateRoute(e, len) {
    // Each step we decrement the dash offset
    len -= 10;
    if (len < 0)
        len = 0;  // clamp to minimum 0

    element.style.strokeDashoffset = len;

    // We need to stop looping when the length gets to 0
    if (len > 0) {
        // Do another step
        setTimeout(function () { animateRoute(e, len); }, 1000);
    }
}

animateRoute(element, pathLength);