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
        // render()
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
        });
    }
}
// squareEls.forEach(function(sqr))


/*----- functions -----*/
  function render() {
    renderBoard();
    renderScores();
    renderControls();
    renderMessages();
  }


