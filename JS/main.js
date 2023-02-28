/*----- constants -----*/

const choices = ["X", "O"]

/*----- state variables -----*/
let player1Choice
let player2Choice
let currentPlayer = 0

/*----- cached elements  -----*/
const boardEl = document.querySelector("#board")
const squareEls = [...document.querySelectorAll(".square")]
const resetBtn = document.querySelector("#reset")
let resultEl = document.querySelector("#result")

boardEl.addEventListener('click', handleClick)
resetBtn.addEventListener('click', handleClick1)
/*----- event listeners -----*/

function handleClick(evt) {
    let currentButton = evt.target
    
    if (currentButton.tagName != 'DIV') {
        return
    } else {
        if(currentPlayer===1){
            if(currentButton.textContent === ""){
                currentButton.textContent = choices[currentPlayer]
                currentPlayer-- 
            }                       
        }else{
            if(currentButton.textContent === ""){
                currentButton.textContent = choices[currentPlayer]
                currentPlayer++
            }               
        }        
        checkForWinner()
    }
}

function handleClick1(evt){
    let resetButton = evt.target
    if (resetButton.tagName != 'BUTTON') {
        return
    } 
    else{
        squareEls.forEach(function(sqr){
            sqr.textContent = ""
        })
    }
    currentPlayer = 0
}



/*----- functions -----*/
  function render() {
    renderBoard();
    renderScores();
    renderControls();
    renderMessages();
  }

  function checkForWinner() {
    if(((squareEls[0].textContent === squareEls[4].textContent) && (squareEls[4].textContent === squareEls[8].textContent) && (squareEls[0].textContent !== "")) ||
    (squareEls[0].textContent === squareEls[3].textContent) &&( squareEls[3].textContent === squareEls[6].textContent && (squareEls[0].textContent !== "")) ||
    (squareEls[0].textContent === squareEls[1].textContent) &&( squareEls[1].textContent=== squareEls[2].textContent && (squareEls[0].textContent !== "")) ||
    (squareEls[1].textContent === squareEls[4].textContent) &&( squareEls[4].textContent=== squareEls[7].textContent && (squareEls[1].textContent !== "")) ||
    (squareEls[3].textContent === squareEls[4].textContent) &&( squareEls[4].textContent=== squareEls[5].textContent && (squareEls[3].textContent !== "")) ||
    (squareEls[6].textContent === squareEls[7].textContent) &&( squareEls[7].textContent=== squareEls[8].textContent && (squareEls[6].textContent !== "")) ||
    (squareEls[2].textContent === squareEls[5].textContent) &&( squareEls[5].textContent=== squareEls[8].textContent && (squareEls[2].textContent !== "")) ||
    (squareEls[2].textContent === squareEls[4].textContent) &&( squareEls[4].textContent=== squareEls[6].textContent && (squareEls[2].textContent !== ""))){
        if(currentPlayer === 1){resultEl.textContent = `Player${currentPlayer} wins!!!`}
        else{resultEl.textContent = `Player${currentPlayer+2} wins!!!`}
        
    }
    
  }


