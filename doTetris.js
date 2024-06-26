// основной
function doTetris(xStart, yStart, currentFigure, timer, glassTemp) {

    let xStartTemp = xStart;
    let yStartTemp = yStart;

    rndSecond = currentFigures[randomFigure(0, 6)]

    function ArrowLeft() {
        if (
            figInGlass(currentFigure, glassCurrent, xStartTemp - 1, yStartTemp)
                .join()
                .includes(2)
        ) {
            xStartTemp = xStartTemp;
        } else {
            xStartTemp--;
            glassTemp = figInGlass(currentFigure, glassCurrent, xStartTemp, yStartTemp)
            drawGlass(glassTemp)
        }
    }
    function ArrowLeftKeydown(event) {
        if (event.code === "ArrowLeft") {
            ArrowLeft()
        }
    }
    document.addEventListener("keydown", ArrowLeftKeydown);
    document.getElementById("left").addEventListener("click", ArrowLeft);

    function ArrowRight() {
            if (
                figInGlass(currentFigure, glassCurrent, xStartTemp + 1, yStartTemp)
                    .join()
                    .includes(2)
            ) {
                xStartTemp = xStartTemp;
            } else {
                xStartTemp++;
                glassTemp = figInGlass(currentFigure, glassCurrent, xStartTemp, yStartTemp)
                drawGlass(glassTemp)
            }
    }
    function ArrowRightKeydown(event) {
        if (event.code === "ArrowRight") {
            ArrowRight()
        }
    }
    document.addEventListener("keydown", ArrowRightKeydown);
    document.getElementById("right").addEventListener("click", ArrowRight);

    function ArrowUp() {
            if (
                figInGlass(rotateFigure(currentFigure), glassCurrent, xStartTemp, yStartTemp)
                    .join()
                    .includes(2)
            ) {
                currentFigure = currentFigure
            } else {
                currentFigure = rotateFigure(currentFigure)
                glassTemp = figInGlass(currentFigure, glassCurrent, xStartTemp, yStartTemp)
                drawGlass(glassTemp)
            }
    }
    function ArrowUpKeydoen(event) {
        if (event.code === "ArrowUp") {
            ArrowUp()
        }
    }
    document.addEventListener("keydown", ArrowUpKeydoen);
    document.getElementById("rotate").addEventListener("click", ArrowUp);

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    function touchstartXY(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }
    function touchendXY(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        calcXup();
    }
    function calcXup() {
        if ((touchstartX - touchendX) >= minDist && (touchstartX - touchendX) <= maxDist) {
            ArrowLeft();
        }
        if ((touchendX - touchstartX) >= minDist && (touchendX - touchstartX) <= maxDist) {
            ArrowRight();
        }
        if ((touchstartY - touchendY) >= minDist && (touchstartY - touchendY) <= maxDist) {
            ArrowUp();
        }
    }
    document.getElementById(zone).addEventListener('touchstart', touchstartXY, false);
    document.getElementById(zone).addEventListener('touchend', touchendXY, false);

    document.getElementById("startButton").addEventListener("click", () => location.reload());

        const promiseDraw = new Promise(function(resolve, reject) {

            function moveTimer(timer) {

                let timerId = setInterval(() => {

                    if (figInGlass(currentFigure, glassCurrent, xStartTemp, yStartTemp).join().includes(2)) {
                        clearInterval(timerId);
                        glassCurrent = glassTemp.map(el => el.slice())

                        if (isGlassFull(glassCurrent)) {
                            reject(score)
                        }

                        resolve(score)

                    } else {

                            if (isLineFull(glassCurrent) !== -1) {
                                let lineFull = isLineFull(glassCurrent)
                                score.lines++
                                for (let i = lineFull; i > 0; i--) {
                                    for (let k = 1; k <= 10; k++) {
                                        glassCurrent[i][k] = glassCurrent[i - 1][k]
                                    }
                                }
                            }

                            glassTemp = figInGlass(currentFigure, glassCurrent, xStartTemp, yStartTemp);
                            drawGlass(glassTemp);
                            yStartTemp++;

                            }

                }, timer);
            }

            function ArrowDown() {
                    document.removeEventListener("keydown", ArrowDownKeydown);
                    document.getElementById("down").removeEventListener("click", ArrowDown);
                    document.removeEventListener("keydown", ArrowLeftKeydown)
                    document.getElementById("left").removeEventListener("click", ArrowLeft);
                    document.removeEventListener("keydown", ArrowRightKeydown);
                    document.getElementById("right").removeEventListener("click", ArrowRight);
                    document.removeEventListener("keydown", ArrowUpKeydoen);
                    document.getElementById("rotate").removeEventListener("click", ArrowUp);
                    document.getElementById(zone).removeEventListener('touchstart', touchstartDown, false);
                    document.getElementById(zone).removeEventListener('touchend', touchendDown, false);
                    document.getElementById(zone).removeEventListener('touchstart', touchstartXY, false);
                    document.getElementById(zone).removeEventListener('touchend', touchendXY, false);
                    moveTimer(timerTemp)
            }
            function ArrowDownKeydown(event) {
                if (event.code === "ArrowDown") {
                    ArrowDown()
                    moveTimer(timerTemp)
                }
            }
            document.addEventListener("keydown", ArrowDownKeydown);
            document.getElementById("down").addEventListener("click", ArrowDown);

            let touchstartY = 0;
            let touchendY = 0;
            function touchstartDown(event) {
                touchstartY = event.changedTouches[0].screenY;
            }
            function touchendDown(event) {
                touchendY = event.changedTouches[0].screenY;
                if ((touchendY - touchstartY) >= minDist && (touchendY - touchstartY) <= maxDist) {
                    ArrowDown();
                }
            }
            document.getElementById(zone).addEventListener('touchstart', touchstartDown, false);
            document.getElementById(zone).addEventListener('touchend', touchendDown, false);

                moveTimer(timer)
        })

        promiseDraw
            .then((score) => {
                doTetris(randomFigure(2, 5), 3, rndSecond, timer, glassCurrent)
                score.figures++
            })
            .catch(score => {
                document.removeEventListener("keydown", ArrowLeftKeydown)
                document.getElementById("left").removeEventListener("click", ArrowLeft);
                document.removeEventListener("keydown", ArrowRightKeydown);
                document.getElementById("right").removeEventListener("click", ArrowRight);
                document.removeEventListener("keydown", ArrowUpKeydoen);
                document.getElementById("rotate").removeEventListener("click", ArrowUp);
                document.getElementById(zone).removeEventListener('touchstart', touchstartXY, false);
                document.getElementById(zone).removeEventListener('touchend', touchendXY, false);
                    score.figures++

                    gameOver()

                    score.figures = 0
                    score.lines = 0
            })
}

let glassTemp = glass.map(el => el.slice());
let glassCurrent = glass.map(el => el.slice());
rndFirst = currentFigures[randomFigure(0, 6)]
doTetris(randomFigure(2, 5), 3, rndFirst, timerStart, glassCurrent)

