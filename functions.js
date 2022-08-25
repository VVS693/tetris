// Функции
// вращение
function rotateFigure (figure) {
    let result = [];
    for (let i = figure.length - 1; i >= 0; i--) {
      for (let k = 0; k < figure[i].length; k++) {
        if (!result[k]) {
          result[k] = [];
        }
        result[k].push(figure[i][k]);
      }
    }
    return result;
  }
// запись текущей фигуры во временный стакан
function figInGlass (figure, glassCurrent, x, y) {
    glassTemp = glassCurrent.map(el => el.slice())
    for (let i = 0; i < figure.length; i++) {
        for (let j = 0; j < figure[i].length; j++) {
            if (figure[i][j] == 1) {
                glassTemp[y + i][x + j] += figure[i][j]
            }
        }
    }
    return glassTemp
}
// вывод на экран
function drawGlass (glassTemp) {
    glassIn.innerText = glassTemp.join('\n').replaceAll(',', '').replaceAll(1, glassMark).replaceAll(0, ' ')
    nextFigure.innerText = rnd.join('\n').replaceAll(',', '').replaceAll(1, glassMark).replaceAll(0, ' ')
    scoreFigures.innerText = score.figures
    scoreLines.innerText = score.lines
}

// Game over
function gameOver() {
    let textTest = document.getElementById("title")
    title.innerText = "GAME OVER"
}

// случайная генерация
function randomFigure(min, max) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// проверка заполнения стакана
function isGlassFull(glassCurrent) {
    let full = []
    let sum = 0
    for (let i = 1; i <= 10; i++) {

        full[i - 1] = sum
        sum = 0
        for (let k = 0; k <= 5; k++) {
            sum = sum + glassCurrent[k][i]
        }
    }
    if (Math.max(...full) > 0) {
        return true
    } else {
        return false
    }
}
// проверка заполнения строки
function isLineFull(glassCurrent) {
    let lineSum = []
    let tempSum = 0
        for (let i = 5; i <= 24; i++) {

            for (let k = 1; k <= 10; k++) {
                tempSum = tempSum + glassCurrent[i][k]
            }
            lineSum[i] = tempSum
            tempSum = 0
        }
    return lineSum.indexOf(10)
}

