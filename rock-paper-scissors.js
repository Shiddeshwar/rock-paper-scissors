function game() 
{
    let player = 0, computer = 0;
    //computerPlay() returns rock/paper/scissors randomly
    function computerPlay() {
        let options = ["rock","paper","scissors"]; 
        let rand = Math.floor(Math.random()*3);
        return options[rand];
    }
    //playRound() Compares the values provided by Player/Human and computer(computerPlay()).
    function playRound(playerSelection, computerSelection) 
    {
        if (computerSelection === playerSelection) 
        {
            return computerSelection + " & " + playerSelection+"! So it's a TIE!";
        }
        else if (computerSelection === "rock" && playerSelection === "scissors") {
            computer +=1;
             return "Rock beats Scissors! Computer Wins!";
        }
        else if (computerSelection === "paper" && playerSelection === "rock") {
            computer +=1;
            return "Paper beats Rock! Computer Wins!";
        }
        else if (computerSelection === "scissors" && playerSelection === "paper") {
            computer +=1;
            return "Scissors beats Paper! Computer Wins!";
        }
        else {
            player += 1;
            return playerSelection + " beats " + computerSelection + "! " + "Human Wins!";
        }
    }
    for (let i = 0; i < 5; i++) 
    {
        const playerSelection = prompt("Enter rock/paper/scissors:","scissors").toLowerCase(); //Value Provided by human
        const computerSelection = computerPlay();
        let res = playRound(playerSelection, computerSelection);
        console.log(res);
        console.log("Score is Human: " + player + " & Computer: " + computer);
    }
    //Code below is to decide the final winner.
    if(player === computer) console.log("Its a TIE!");
    else {
        let winner = player>computer?"Human is the winner!":"Computer is the winner!";
        console.log(winner);
    }
}
game();
