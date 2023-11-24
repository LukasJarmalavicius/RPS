function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    switch (choice)
    {
        case 1:
            console.log("rock");
            return "rock";
        case 2:
            console.log("paper");
            return "paper";
        case 3:
            console.log("scissors");
            return "scissors";  
  
    }

}
let playerSelection;
let computerSelection;
let Pscore = 0;
let compscore = 0;

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("rock paper scissors");
    computerSelection = getComputerChoice();
    const playerSelect = playerSelection.toLowerCase();
    if (computerSelection === playerSelect) {
            console.log("you got a tie!");
    }
    if ((computerSelection === "rock" && playerSelect === "paper") ||
        (computerSelection === "paper" && playerSelect === "scissors") ||
        (computerSelection === "scissors" & playerSelect === "rock")) {
            Pscore++;
            console.log("you won! " + playerSelect + " beats " + computerSelection);
    }
    if ((computerSelection === "paper" & playerSelect === "rock") ||
        (computerSelection === "scissors" & playerSelect === "paper") ||    
        (computerSelection === "rock" & playerSelect === "scissors")) {
            compscore++;
            console.log("you lost! " + computerSelection + " beats " + playerSelect);
    }
}


function game(){
    playRound (playerSelection, computerSelection);
    console.log(Pscore + " " + compscore);
    playRound (playerSelection, computerSelection);
    console.log(Pscore + " " + compscore);
    playRound (playerSelection, computerSelection);
    console.log(Pscore + " " + compscore);
    playRound (playerSelection, computerSelection);
    console.log(Pscore + " " + compscore);
    playRound (playerSelection, computerSelection);
    console.log(Pscore + " " + compscore);

    if (Pscore > compscore){
        console.log("you win!")
    }
    if (Pscore < compscore){
        console.log("you lose!")
    }
    if (Pscore === compscore){
        console.log("you tied!")
    }

}
