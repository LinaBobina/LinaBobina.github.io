//💋  Button for typing in option and is case-insensitive 💋 //
function playerSelection() {
    let playerChoice = prompt("What do you pick?").toLowerCase()
    if (playerChoice === "rock") {
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
        return document.getElementById("playerDialog").innerHTML = "You picked " + playerChoice
    }
    else return document.getElementById("playerDialog").innerHTML = "Huh?"
}


//💋 Computer's random choice 💋 //
let myChoices = ["rock", "paper", "scissors"];

function getComputerChoice(myChoices){
    let random = myChoices[Math.floor(Math.random()*myChoices.length)];
    // return console.log(random)
    // return document.getElementById("computerDialog").innerHTML = random
}


//💋 One round of rock paper scissors 💋 //
function singleRound(){

}






/*
function round(){
    let loser = "Ya lost. Try again."
    let winner = "BINGO. WINNER!"
    let tie = "No one won! Try again."
    let computerChoice = getComputerChoice(myChoices)

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

document.getElementById("resultsDialog").innerHTML = round()
*/