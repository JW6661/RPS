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
const choice = ['Rock','Paper','Scissors']
let playerEl = []

savePlayerEl.addEventListener("click", function (){
    playerEl.push(inputEl.value)
    inputEl.value = " "
    renderName()
})

rock.addEventListener("click", function (){
   outputOne.textContent = choice[0]
   outputTwo.textContent = randomChoice()
   
})
paper.addEventListener("click", function (){
    outputOne.textContent = choice[1]
    outputTwo.textContent = randomChoice()
    
 })
scissors.addEventListener("click", function (){
    outputOne.textContent = choice[2]
    outputTwo.textContent = randomChoice()
 })

resetGame.addEventListener("click", function (){
    gameReset()
})

function renderName () {
    playerName.innerHTML += playerEl[0]
        if (playerName.innerHTML = playerEl[0])
            return " "
}

function renderGame(outputOne, outputTwo) {
        if(outputOne === outputTwo) {
            console.log("It's a draw!");
        } else if(outputOne === choice[0] && outputTwo === choice[2]) {
            console.log("You win with rock!");
        } else if(outputOne === choice[0] &&  outputTwo === choice[1]) {
            console.log("You lost with rock!");
        } else if(outputOne === 1 &&  outputTwo === 0) {
            console.log("You won with paper!");
        } else if(outputOne === 1 &&  outputTwo === 2) {
            console.log("You lost with paper!");
        } else if(outputOne === 2 &&  outputTwo === 0) {
            console.log("You won with sissors!");
        } else if(outputOne === 2 &&  outputTwo === 1) {
            console.log("You lost with scissors!");
            }
        };




function randomChoice (){
    let randomNumber = Math.floor(Math.random()*3)
        if (randomNumber === 0) {
            return choice[0]
        } else if (randomNumber === 1) {
            return choice[1]
        } else  {
            return choice[2]
        }
}
function gameReset (){
    window.location.reload();
  }
  