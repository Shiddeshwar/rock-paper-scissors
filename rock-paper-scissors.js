function computerPlay() {
    let options = ["rock","paper","scissors"]; 
    let rand = Math.floor(Math.random()*3);
    return options[rand];
}
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        alert(computerSelection + " & " + playerSelection+"! So it's a TIE!");
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        alert("Rock beats Scissors! Computer Wins!");
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        alert("Paper beats Rock! Computer Wins!");
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        alert("Scissors beats Paper! Computer Wins!");
    }
    else {
        alert(playerSelection + " beats " + computerSelection + "! " + "Player Wins!");
    }
}
const playerSelection = prompt("Enter rock/paper/scissors:","scissors").toLowerCase();
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);