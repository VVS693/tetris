


// Tetris start
"use strict";
// стакан для математики
const glass = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

let I = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
]
let L = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1]
]
let T = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
]
let J = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0]
]
let Z = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
]
let S = [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
]
// const glassMark = '■' // символ рисования стенок и фигур
const glassMark = '☐'

const timerStart = 350 // начальная скорость
const timerTemp = 25 // скорость падения
const score = {
    figures: 0,
    lines: 0
}

let textTest = document.getElementById("glassIn")

let aaa = glass.join('\n').replaceAll(',', '').replaceAll(1, glassMark).replaceAll(0, ' ')
textTest.innerText = aaa

let aaa1 = L.join('\n').replaceAll(',', '').replaceAll(1, glassMark).replaceAll(0, ' ')
nextFigure.innerText = aaa1



function swipe (zone) {
    const maxDist = 150
    const minDist = 60

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    const gestureZone = document.getElementById(zone);

    gestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    gestureZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    }, false); 

    function handleGesture() {
        if ((touchstartX - touchendX) >= minDist && (touchstartX - touchendX) <= maxDist) {
            console.log('Swiped left');
        }
        
        if ((touchendX - touchstartX) >= minDist && (touchendX - touchstartX) <= maxDist) {
            console.log('Swiped right');
        }
        
        if ((touchstartY - touchendY) >= minDist && (touchstartY - touchendY) <= maxDist) {
            console.log('Swiped up');
        }
        
        if ((touchendY - touchstartY) >= minDist && (touchendY - touchstartY) <= maxDist) {
        console.log('Swiped down');
        }
    }
}
swipe("leftSide")