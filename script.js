function getComputerChoice () {
    let choice = Math.floor(Math.random()*(3 - 1) + 1);
    switch (choice)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";  
  
    }

}
let playerSelection;
let computerSelection;
let pScore = 0;
let cScore = 0;
let tScore = 1;
const cScoreUpdate = document.querySelector('.cScore');
const pScoreUpdate = document.querySelector('.pScore');
const pizza = document.querySelector('.container')
const spaghetti = document.querySelector('.wincontainer')

let roundButton = document.querySelectorAll('#btn');
let resetButton = document.querySelector('.restart');
roundButton.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.className;
        playRound(playerSelection);

    });
})

resetButton.addEventListener('click', () => {
    pScoreUpdate.innerHTML = 0;
    cScoreUpdate.innerHTML = 0;
    pizza.innerHTML = "Results here"
    spaghetti.innerHTML = ""
    pScore = 0;
    cScore = 0;
    tScore = 1;
})
function sendResult(winner){
    pScoreUpdate.innerHTML = pScore;
    cScoreUpdate.innerHTML = cScore;
    const ResultCont = document.querySelector('.container');
    ResultCont.textContent = winner;
}

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    const playerSelect = playerSelection.toLowerCase();
    if (pScore < 5 && cScore < 5) {
        if (computerSelection === playerSelect) {
            sendResult("you got a tie!");
        }
        if ((computerSelection === "rock" && playerSelect === "paper") ||
            (computerSelection === "paper" && playerSelect === "scissors") ||
            (computerSelection === "scissors" & playerSelect === "rock")) {
                pScore++;
                sendResult("you won! " + playerSelect + " beats " + computerSelection);
        }
        if ((computerSelection === "paper" && playerSelect === "rock") ||
            (computerSelection === "scissors" && playerSelect === "paper") ||    
            (computerSelection === "rock" && playerSelect === "scissors")) {
                cScore++;
                sendResult("you lost! " + computerSelection + " beats " + playerSelect);
        }
    }
    if (pScore === 5) {

        if (tScore === 1) {
        sendResult("game end");
        spaghetti.innerHTML = " YOU WIN!"
        tScore--;
        }
    }
    if (cScore === 5) {

        if (tScore === 1) {
        sendResult("game end");
        spaghetti.innerHTML = " COMPUTER WINS!"
        tScore--;
        }
    }
}




