


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

const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight

// const pageWidth = document.documentElement.clientWidth
// const pageHeight = document.documentElement.clientHeight

document.getElementById("scoreFigures").innerText = pageWidth
document.getElementById("scoreLines").innerText = pageHeight

let scaleTetrisOk = 1

scaleTetrisOk = Math.min(pageHeight / 692,  pageWidth / 384)
// document.getElementById("startButton").innerText = scaleTetrisOk


document.documentElement.style.setProperty('--scaleTetris', scaleTetrisOk)


