let options = ["rock", "paper", "scissors"];
let loser = "You lost. Try again."
let winner = "BINGO. WINNER!"
let tie = "No one won! Try again."

// determine computer's choice  
function getComputerChoice(){
    let random = options[Math.floor(Math.random()*options.length)];
    console.log("computer: " + random)
    return random
}

// determine player's choice
function getPlayerChoice () {
    const choice = event.target.id;

    switch (choice) {
        case 'buttonSymbol-rockBtn':
            console.log("player: rock");
            return "rock";
        case 'buttonSymbol-paperBtn':
            console.log("player: paper");
            return "paper";
        case 'buttonSymbol-scissorsBtn':
            console.log("player: scissors");
            return "scissors";
        default:
            console.log("player: N/A");
    }
}


// compare player's choice to computer's choice
function playRound(getPlayerChoice, getComputerChoice){
    if (getPlayerChoice === "scissors" && getComputerChoice === "paper"){
        return winner
    }
    else if (getPlayerChoice === "scissors" && getComputerChoice === "rock"){
        return loser
    }
    else if (getPlayerChoice === "scissors" && getComputerChoice === "scissors"){
        return tie
    }
    else if (getPlayerChoice === "rock" && getComputerChoice === "paper"){
        return loser
    }
    else if (getPlayerChoice === "rock" && getComputerChoice === "scissors"){
        return winner
    }
    else if (getPlayerChoice === "rock" && getComputerChoice === "rock"){
        return tie
    }
    else if (getPlayerChoice === "paper" && getComputerChoice === "scissors"){
        return loser
    }
    else if (getPlayerChoice === "paper" && getComputerChoice === "rock"){
        return winner
    }
    else if (getPlayerChoice === "paper" && getComputerChoice === "paper"){
        return tie
    }
}

// DOM for Player Selection results
const containerPD = document.querySelector('#container-playerDialog');
const contentPD = document.createElement('div')
contentPD.classList.add('contentPD');
containerPD.appendChild(contentPD);

// DOM for Computer Selection results
const containerCD = document.querySelector('#container-computerDialog');
const contentCD = document.createElement('div')
contentCD.classList.add('contentCD');
containerCD.appendChild(contentCD);

// DOM for Round results
const containerResults = document.querySelector('#container-results');
const contentResults = document.createElement('div')
contentResults.classList.add('contentResults');
containerResults.appendChild(contentResults);

// Add event listener to buttons that call on 'playRound' function
// with the correct 'playerSelection' every time a button is clicked
const buttons = document.querySelectorAll(".buttonSymbol");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const round = playRound(playerSelection, computerSelection);
        
        contentPD.textContent = "You've selected " + playerSelection;
        contentCD.textContent = "Computer selected " + computerSelection;
        contentResults.textContent = "Results: " + round;

    })
});
