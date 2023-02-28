/*----- constants -----*/

const choices = ["X", "O"]

/*----- state variables -----*/
let player1Choice
let player2Choice
let currentPlayer = 0
let tieGame = []
let endGame = false
let gameOn = false

/*----- cached elements  -----*/
const boardEl = document.querySelector("#board")
const squareEls = [...document.querySelectorAll(".square")]
const resetBtn = document.querySelector("#reset")
const resultEl = document.querySelector("#result")
const startEl = document.querySelector("#start")

boardEl.addEventListener('click', handleClick)
resetBtn.addEventListener('click', handleClick1)
startEl.addEventListener('click', handleClick2)
/*----- event listeners -----*/

function handleClick(evt) {
    let currentButton = evt.target

    if (currentButton.tagName != 'DIV') {
        return
    } else {
        if(gameOn === true){
            if (currentPlayer === 1) {
                if (currentButton.textContent === "") {
                    currentButton.textContent = choices[currentPlayer]
                    currentPlayer--
                    tieGame.push(1)
                }
            } else {
                if (currentButton.textContent === "") {
                    currentButton.textContent = choices[currentPlayer]
                    currentPlayer++
                    tieGame.push(1)
                }
            }
            checkForWinner()
        }
        else{
            resultEl.textContent = "Click on 'start game' button to start the game."
        }
    }
}

function handleClick1(evt) {
    let resetButton = evt.target
    if (resetButton.tagName != 'BUTTON') {
        return
    }
    else {
        squareEls.forEach(function (sqr) {
            sqr.textContent = ""
        })
    }
    currentPlayer = 0
    tieGame = []
    resultEl.textContent =""
    endGame = false
    gameOn = false
}

function handleClick2(evt){
    if(endGame === false){
        gameOn = true
        resultEl.textContent = `Player${currentPlayer + 1}, it's your turn!!! Put ${choices[currentPlayer]} on the board!`
    }
    
}

function checkForWinner() {
    if (((squareEls[0].textContent === squareEls[4].textContent) && (squareEls[4].textContent === squareEls[8].textContent) && (squareEls[0].textContent !== "")) ||
        (squareEls[0].textContent === squareEls[3].textContent) && (squareEls[3].textContent === squareEls[6].textContent && (squareEls[0].textContent !== "")) ||
        (squareEls[0].textContent === squareEls[1].textContent) && (squareEls[1].textContent === squareEls[2].textContent && (squareEls[0].textContent !== "")) ||
        (squareEls[1].textContent === squareEls[4].textContent) && (squareEls[4].textContent === squareEls[7].textContent && (squareEls[1].textContent !== "")) ||
        (squareEls[3].textContent === squareEls[4].textContent) && (squareEls[4].textContent === squareEls[5].textContent && (squareEls[3].textContent !== "")) ||
        (squareEls[6].textContent === squareEls[7].textContent) && (squareEls[7].textContent === squareEls[8].textContent && (squareEls[6].textContent !== "")) ||
        (squareEls[2].textContent === squareEls[5].textContent) && (squareEls[5].textContent === squareEls[8].textContent && (squareEls[2].textContent !== "")) ||
        (squareEls[2].textContent === squareEls[4].textContent) && (squareEls[4].textContent === squareEls[6].textContent && (squareEls[2].textContent !== ""))) {
        if (currentPlayer === 1) {
            resultEl.textContent = `Player${currentPlayer} wins!!! Reset the game.`
            endGame = true
        } else {
            resultEl.textContent = `Player${currentPlayer + 2} wins!!! Reset the game.`
            endGame = true
        }

    }
    else {
        if (tieGame.length === 9) {
            resultEl.textContent = "It is a tie!!!"
            endGame = true
        }
        else {
            resultEl.textContent = `Player${currentPlayer + 1}, it's your turn!!! Put ${choices[currentPlayer]} on the board!`

        }
    }

}


