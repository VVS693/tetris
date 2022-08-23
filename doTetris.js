// основной
function doTetris(xStart, yStart, currentFigure, timer, glassTemp) {
       
    let xStartTemp = xStart;
    let yStartTemp = yStart;


        function ArrowRight(event) {
            if (event.code == "ArrowRight") {
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
        }
        document.addEventListener("keydown", ArrowRight);

        function ArrowLeft(event) {
            if (event.code == "ArrowLeft") {
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
        }
        document.addEventListener("keydown", ArrowLeft);

        function ArrowUp(event) {
            if (event.code == "ArrowUp") {
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
        }
        document.addEventListener("keydown", ArrowUp);

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

                            if (isLineFull(glassCurrent) != -1) {
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

            function ArrowDown(event) {
                if (event.code == "ArrowDown") {
                    document.removeEventListener("keydown", ArrowDown)
                    document.removeEventListener("keydown", ArrowRight)
                    document.removeEventListener("keydown", ArrowLeft)
                    document.removeEventListener("keydown", ArrowUp)
                    moveTimer(timerTemp) 
                }
            }
            document.addEventListener("keydown", ArrowDown);

                moveTimer(timer)
        })

        promiseDraw
            .then((score) => {
                doTetris(randomFigure(2, 5), 3, currentFigures[randomFigure(0, 6)], timer, glassCurrent)
                score.figures++
            })
            .catch(score => {

                document.removeEventListener("keydown", ArrowRight)
                document.removeEventListener("keydown", ArrowLeft)
                document.removeEventListener("keydown", ArrowUp)
                
                    score.figures++
                    // console.log('%cGAME OVER!!!', 'font-weight: bold; color: red; font-size: 24px')
                    gameOver()
                   
                    score.figures = 0
                    score.lines = 0
            })   
}

let glassTemp = glass.map(el => el.slice());
let glassCurrent = glass.map(el => el.slice());
doTetris(randomFigure(2, 5), 3, currentFigures[randomFigure(0, 6)], timerStart, glassCurrent)