
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
    document.getElementById("computerDialog").innerHTML = "Computer picked " + random + "!"
    return random
}


// Player button and choice being stored
const buttons = document.querySelectorAll('button');
const playerDialog = document.getElementById("playerDialog");

Array.from(buttons).forEach(button => { 
    button.addEventListener('click', () => {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        playerDialog.innerHTML = `Player picked ${playerChoice}!`;
        playerDialog.classList.remove('fade-in');
        void playerDialog.offsetWidth;
        playerDialog.classList.add('fade-in');
        return singleRound(playerChoice, computerChoice)
    });
});




function getPlayerChoice () {
    const choice = event.target.id;

    switch (choice) {
        case 'rockBtn':
            return "rock";
        case 'paperBtn':
            return "paper";
        case 'scissorsBtn':
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
        document.getElementById("resultsDialog").innerHTML = winner
        return winner
    }
    else if (playerChoice === "scissors" && computerChoice === "rock"){
        document.getElementById("resultsDialog").innerHTML = loser
        return loser
    }
    else if (playerChoice === "scissors" && computerChoice === "scissors"){
        document.getElementById("resultsDialog").innerHTML = tie
        return tie
    }
    else if (playerChoice === "rock" && computerChoice === "paper"){
        document.getElementById("resultsDialog").innerHTML = loser
        return loser
    }
    else if (playerChoice === "rock" && computerChoice === "scissors"){
        document.getElementById("resultsDialog").innerHTML = winner
        return winner
    }
    else if (playerChoice === "rock" && computerChoice === "rock"){
        document.getElementById("resultsDialog").innerHTML = tie
        return tie
    }
    else if (playerChoice === "paper" && computerChoice === "scissors"){
        document.getElementById("resultsDialog").innerHTML = loser
        return loser
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        document.getElementById("resultsDialog").innerHTML = winner
        return winner
    }
    else if (playerChoice === "paper" && computerChoice === "paper"){
        document.getElementById("resultsDialog").innerHTML = tie
        return tie
    }

}