let player = 0, computer = 0, gameCount = 0;
function computerPlay() {
    let options = ["rock","paper","scissors"]; 
    let rand = Math.floor(Math.random()*3);
    return options[rand];
}
function playRound(playerSelection, computerSelection) 
{
<<<<<<< HEAD
    if (computerSelection === playerSelection) 
=======
    let player = 0, computer = 0;
    //computerPlay() returns rock/paper/scissors randomly
    function computerPlay() {
        let options = ["rock","paper","scissors"]; 
        let rand = Math.floor(Math.random()*3);
        return options[rand];
    }
    //playRound() Compares the values provided by Player/Human and computer(computerPlay()).
    function playRound(playerSelection, computerSelection) 
>>>>>>> 0af5e868441a55da4a9cf81254fdddcd1a4334c5
    {
        return computerSelection + " & " + playerSelection+"! So it's a TIE!";
    }
<<<<<<< HEAD
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
=======
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
>>>>>>> 0af5e868441a55da4a9cf81254fdddcd1a4334c5
    else {
        player += 1;
        return playerSelection + " beats " + computerSelection + "! " + "Human Wins!";
    }
}
function game(select) {
    gameCount += 1;
    let playerSelection= select;
    const computerSelection = computerPlay();
    let res = playRound(playerSelection, computerSelection);
    document.getElementById('human').innerHTML = player;
    document.getElementById('computer').innerHTML = computer;
    let comm = document.getElementById('Commentary');
    comm.innerHTML = res;
    document.getElementById('round').innerHTML = "Round " + gameCount;
    if (player>= 5 || computer >= 5) {
        let winner = player>computer?"Human is the winner!":"Computer is the winner!";
        comm.innerHTML = winner;
        gameCount = 0, player = 0, computer = 0;
        document.body.removeEventListener('click',clickHandler);
        let button = document.createElement('button');
        button.innerHTML = "Play Again";
        button.classList.add('keys','key');
        document.body.insertBefore(button,document.body.lastElementChild);
        button.addEventListener('click',playAgain);
    }
}
function playAgain() {
    location.reload();
}
function clickHandler(event) {
    if (event.target.nodeName == "BUTTON") {
        let playerSelect = event.target.id;
        game(playerSelect);
    }
}
<<<<<<< HEAD
document.body.addEventListener("click", clickHandler);
=======
game();
>>>>>>> 0af5e868441a55da4a9cf81254fdddcd1a4334c5
