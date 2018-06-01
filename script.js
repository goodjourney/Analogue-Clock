//#minute {transform: rotate(15deg)}

const HRHAND = document.querySelector("#hour");
const MINHAND = document.querySelector("#minute");
const SECHAND = document.querySelector("#second");

let date = new Date();

let currentHr = date.getHours()%12;
let currentMin = date.getMinutes();
let currentSec = date.getSeconds();

let hrPosition = ((currentHr + (currentMin/60))/12)*360;
let minPosition = (currentMin/60)*360 + (currentSec/60)*360/60;    
let secPosition = (currentSec/60)*360;

HRHAND.setAttribute("style", "transform: rotate(" + hrPosition + "deg)");
MINHAND.setAttribute("style", "transform: rotate(" + minPosition + "deg)");
SECHAND.setAttribute("style", "transform: rotate(" + secPosition + "deg)");

function setCurrentPosition() {        
    let secDeg = 6;
    let minDeg = 6;
    let hrDeg = 5;

    secPosition += secDeg;
    SECHAND.setAttribute("style", "transform: rotate(" + secPosition + "deg)");
    
    if (secPosition%360 == 0) {
        minPosition  += minDeg;
        MINHAND.setAttribute("style", "transform: rotate(" + minPosition + "deg)");
    }
    
    if (minPosition%360 == 0) {
        hrPosition += hrDeg;        
        HRHAND.setAttribute("style", "transform: rotate(" + hrPosition + "deg)");
    }
    

    
    
    

}


setInterval(setCurrentPosition, 1000);






