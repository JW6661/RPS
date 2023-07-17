const inputEl = document.getElementById("input-el")
const savePlayerEl = document.getElementById("savebtn-el")
const playerName = document.getElementById("player-el")
const resetGame = document.getElementById("reset-el")
const outputOne = document.getElementById("output-elone")
const outputTwo = document.getElementById("output-eltwo")
const gameResult = document.getElementById("game-result")
const rock = document.getElementById("rock-el")
const paper = document.getElementById("paper-el")
const scissors = document.getElementById("scissors-el")
const winLose = document.getElementById("win-lose")
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
let choice = ['Rock','Paper','Scissors']
let playerEl = []
let computer =  randomChoice ()
let computerWins = 1;
let playerWins = 1;
let draws = 0;

    savePlayerEl.addEventListener("click", function (){
    playerEl.push(inputEl.value)
    inputEl.value = " "
    renderName()    
})

rock.addEventListener("click", function (){
    outputOne.textContent = choice[0]
    outputTwo.textContent = randomChoice()
    gameResult.innerHTML = renderGame(outputOne, outputTwo)
    renderScore()
    gameWinner ()
 })

 paper.addEventListener("click", function (){
     outputOne.textContent = choice[1]
     outputTwo.textContent = randomChoice()
     gameResult.innerHTML = renderGame(outputOne, outputTwo) 
     renderScore()
     gameWinner ()

  })
 scissors.addEventListener("click", function (){
     outputOne.textContent = choice[2]
     outputTwo.textContent = randomChoice ()
     gameResult.innerHTML = renderGame(outputOne, outputTwo)
     renderScore()
     gameWinner ()    
  })

  resetGame.addEventListener("click", function (){
    gameReset()
})


 
function renderGame(outputOne, outputTwo) {
    if(outputOne.textContent === 'Rock' && outputTwo.textContent === 'Scissors') {
        return("You win with Rock!");
    } else if(outputOne.textContent === 'Rock' &&  outputTwo.textContent === 'Paper') {
        return("You lost with Rock!");
    } else if(outputOne.textContent === 'Paper' &&  outputTwo.textContent === 'Rock') {
        return("You won with Paper!");
    } else if(outputOne.textContent === 'Paper' &&  outputTwo.textContent === 'Scissors' ) {
        return("You lost with Paper!");
    } else if(outputOne.textContent === 'Scissors' &&  outputTwo.textContent === 'Paper') {
        return("You won with Scissors!");
    } else if(outputOne.textContent === 'Scissors' &&  outputTwo.textContent  === 'Rock') {
        return("You lost with Scissors!");
    } else  (outputOne.textContent === outputTwo.textContent) 
        return("It's a draw!");
    }
   
function renderScore (){
    if (gameResult.innerHTML === "You win with Rock!")
        playerScore.innerHTML = playerWins++;
    else if (gameResult.innerHTML === "You lost with Rock!")
        computerScore.innerHTML = computerWins++;
    else if (gameResult.innerHTML === "You won with Paper!")
        playerScore.innerHTML = playerWins++;
    else if (gameResult.innerHTML === "You lost with Paper!")
        computerScore.innerHTML = computerWins++;
        else if (gameResult.innerHTML === "You won with Scissors!")
        playerScore.innerHTML = playerWins++;
    else if (gameResult.innerHTML === "You lost with Scissors!")
        computerScore.innerHTML = computerWins++;
    else (gameResult.innerHTML === "It's a draw!")
        draws++;
}

function randomChoice (){
    let randomNumber = Math.floor(Math.random()*3)
        if (randomNumber === 0) {
            return 'Rock'
        } else if (randomNumber === 1) {
            return 'Paper'
        } else  {
            return 'Scissors'
        } 
}

function renderName () {
    playerName.innerHTML += playerEl[0]
        if (playerName.innerHTML = playerEl[0])
            return " "
    
}
function gameWinner () {
    if (playerWins === 6)
        return winLose.innerHTML = "You Win!";
    else if (computerWins === 6)
        return winLose.innerHTML = "You Lose!";
}

function gameReset (){
    window.location.reload();
  }
  