const inputEl = document.getElementById("input-el")
const savePlayerEl = document.getElementById("savebtn-el")
const playerName = document.getElementById("player-el")
const resetGame = document.getElementById("reset-el")
const outputOne = document.getElementById("output-elone")
const outputTwo = document.getElementById("output-eltwo")
const gameScore = document.getElementById("game-score")
const rock = document.getElementById("rock-el")
const paper = document.getElementById("paper-el")
const scissors = document.getElementById("scissors-el")
let choice = ['Rock','Paper','Scissors']
let playerEl = []
let computer =  randomChoice ()

savePlayerEl.addEventListener("click", function (){
    playerEl.push(inputEl.value)
    inputEl.value = " "
    renderName()
})
 
function renderGame(outputOne, outputTwo) {
    if(outputOne.textContent === 'Rock' && outputTwo.textContent === 'Scissors') {
        return("You win with rock!");
    } else if(outputOne.textContent === 'Rock' &&  outputTwo.textContent === 'Paper') {
        return("You lost with rock!");
    } else if(outputOne.textContent === 'Paper' &&  outputTwo.textContent === 'Rock') {
        return("You won with paper!");
    } else if(outputOne.textContent === 'Paper' &&  outputTwo.textContent === 'Scissors' ) {
        return("You lost with paper!");
    } else if(outputOne.textContent === 'Scissors' &&  outputTwo.textContent === 'Paper') {
        return("You won with sissors!");
    } else if(outputOne.textContent === 'Scissors' &&  outputTwo.textContent  === 'Rock') {
        return("You lost with scissors!");
    } else  (outputOne.textContent === outputTwo.textContent) 
        return("It's a draw!")

    }

rock.addEventListener("click", function (){
    outputOne.textContent = choice[0]
    outputTwo.textContent = randomChoice()
    gameScore.innerHTML = renderGame(outputOne, outputTwo)  
 
   
    
 })
 paper.addEventListener("click", function (){
     outputOne.textContent = choice[1]
     outputTwo.textContent = randomChoice()
     gameScore.innerHTML = renderGame(outputOne, outputTwo)  
 
     
  })
 scissors.addEventListener("click", function (){
     outputOne.textContent = choice[2]
     outputTwo.textContent = randomChoice ()
     gameScore.innerHTML = renderGame(outputOne, outputTwo)  
 
  })

    
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


resetGame.addEventListener("click", function (){
    gameReset()
})

function renderName () {
    playerName.innerHTML += playerEl[0]
        if (playerName.innerHTML = playerEl[0])
            return " "
    
}


function gameReset (){
    window.location.reload();
  }
  