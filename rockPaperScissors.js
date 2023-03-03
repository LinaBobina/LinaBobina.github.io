
/*// PSUEDOCODE //*
1. function determineComputerChoice
2. choices are rock, paper, scissors
3. pick random one
4. print results */





///////// VARIABLES
let computerChoice = ["rock", "paper", "scissors"];

//////////// Computer's random generated determined choice // 
function getComputerChoice(){
    let random = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log("Computer picks " + random + "!")
    return random
}


// Player button and choice being stored
const buttons = document.querySelectorAll('button');

Array.from(buttons).forEach(button => { 
    button.addEventListener('click', () => {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(singleRound(playerChoice, computerChoice))
    });
});


function getPlayerChoice () {
    const choice = event.target.id;

    switch (choice) {
        case 'rockBtn':
            console.log("Player picks Rock!")
            return "rock";
        case 'paperBtn':
            console.log("Player picks Paper!")
            return "paper";
        case 'scissorsBtn':
            console.log("Player picks Scissors!")
            return "scissors";
        default:
            console.log("nothing");
    }
}

// determine winner of round
function singleRound(playerChoice, computerChoice){
    let loser = "You lost. Try again."
    let winner = "BINGO. WINNER!"
    let tie = "No one won! Try again."

    if (playerChoice === "scissors" && computerChoice === "paper"){
        return winner
    }
    else if (playerChoice === "scissors" && computerChoice === "rock"){
        return loser
    }
    else if (playerChoice === "scissors" && computerChoice === "scissors"){
        return tie
    }
    else if (playerChoice === "rock" && computerChoice === "paper"){
        return loser
    }
    else if (playerChoice === "rock" && computerChoice === "scissors"){
        return winner
    }
    else if (playerChoice === "rock" && computerChoice === "rock"){
        return tie
    }
    else if (playerChoice === "paper" && computerChoice === "scissors"){
        return loser
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        return winner
    }
    else if (playerChoice === "paper" && computerChoice === "paper"){
        return tie
    }

}