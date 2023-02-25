
/*// PSUEDOCODE //*
1. function determineComputerChoice
2. choices are rock, paper, scissors
3. pick a random one
4. print results */


///////// VARIABLES
let computerChoice = ["rock", "paper", "scissors"];

//////////// Computer's random generated determined choice // 
function getComputerChoice(computerChoice){
    let random = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    random = random.charAt(0).toUpperCase() + random.slice(1); 
    let computerChoiceOutput = document.getElementById("computerDialog").innerHTML = "Computer picked " + random + "!";
    return computerChoiceOutput
}

////////// Player's input for determined choice // 
function getPlayerSelection() {
    let playerChoice = prompt("Enter in your choice between Rock, Paper, or Scissors!").toLowerCase()

    if (playerChoice === "rock") {
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
        let playerSelection = document.getElementById("playerDialog").innerHTML = ("Player picked " + playerChoice + "!")
        return playerSelection
    }
    else if (playerChoice === "paper") {
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
        let playerSelection = document.getElementById("playerDialog").innerHTML = ("Player picked " + playerChoice + "!")
        return playerSelection 
    }
    else if (playerChoice === "scissors") {
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
        let playerSelection = document.getElementById("playerDialog").innerHTML = ("Player picked " + playerChoice + "!")
        return playerSelection
    }
    else {
        document.getElementById("playerDialog").innerHTML = ("Huh? What's that? Try again!")
    }
}



// Function for determining winner //
function singleRound() {
    let computerSelection = getComputerChoice(computerChoice);
    if (computerSelection === "rock" && playerSelection === "rock") {
        return document.getElementById("resultsDialog").innerHTML = "Hello"
    }
}


/* function singleRound(){
    let loser = "Ya lost. Try again."
    let winner = "BINGO. WINNER!"
    let tie = "No one won! Try again."

    document.getElementById("computerDialog").innerHTML = ("Computer picks " + computerSelection)

    if (computerSelection === "scissors" && playerSelection === "paper"){
        return loser
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        return winner
    }
    else if (computerSelection === "scissors" && playerSelection === "scissors"){
        return tie
    }
    else if (computerSelection === "rock" && playerSelection === "paper"){
        return winner
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"){
        return loser
    }
    else if (computerSelection === "rock" && playerSelection === "rock"){
        return tie
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        return winner
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        return loser
    }
    else if (computerSelection === "paper" && playerSelection === "paper"){
        return tie
    }

    document.getElementById("resultsDialog").innerHTML = singleRound()

}


*/