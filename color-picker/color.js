/* JavaScript color picker functions */

function colorValue(color) {
    let elem = document.getElementById(color);
    let num = Number(elem.value);
    
    if (num < 0) {
        num = 0;
        elem.value = "0";
    }
    
    if (num > 255) {
        num = 255;
        elem.value = "255";
    }
    
    num = num.toString(16);
    
    if (num.length < 2) {
        num = 0 + num;
    }
    
    return num;
}

function slider(color) {
    let R = colorValue("red");
    let G = colorValue("green");
    let B = colorValue("blue");
    
    let hex = R + G + B;

    let colorLegend = document.getElementById("hexcolor");
    colorLegend.innerHTML = "Color: #" + hex;
    
    let swatch = document.getElementById("swatch");
    let context = swatch.getContext("2d");
    context.fillStyle = "#" + hex;
    context.fillRect = (0, 0, 100, 100);
}