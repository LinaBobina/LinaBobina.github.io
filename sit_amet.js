
/*// PSUEDOCODE //*
1. function getComputerChoice
2. choices are rock, paper, scissors
3. pick a random one
4. print results */

let myChoices = ["rock", "paper", "scissors"];

function getComputerChoice(myChoices){
    let random = myChoices[Math.floor(Math.random()*myChoices.length)];
    return random
}

function playerSelection(myChoices){
    let random = myChoices[Math.floor(Math.random()*myChoices.length)];
    return random
}

function round(){
    let loser = "Ya lost. Try again."
    let winner = "BINGO. WINNER!"
    let tie = "No one won! Try again."
    let playerChoice = playerSelection(myChoices);
    let computerChoice = getComputerChoice(myChoices);

    console.log("Player picks " + playerChoice)
    console.log("Computer picks " + computerChoice)

    if (computerChoice === "scissors" && playerChoice === "paper"){
        return loser
    }
    else if (computerChoice === "scissors" && playerChoice === "rock"){
        return winner
    }
    else if (computerChoice === "scissors" && playerChoice === "scissors"){
        return tie
    }
    else if (computerChoice === "rock" && playerChoice === "paper"){
        return winner
    }
    else if (computerChoice === "rock" && playerChoice === "scissors"){
        return loser
    }
    else if (computerChoice === "rock" && playerChoice === "rock"){
        return tie
    }
    else if (computerChoice === "paper" && playerChoice === "scissors"){
        return winner
    }
    else if (computerChoice === "paper" && playerChoice === "rock"){
        return loser
    }
    else if (computerChoice === "paper" && playerChoice === "paper"){
        return tie
    }
}
console.log(round())
