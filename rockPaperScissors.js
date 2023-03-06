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
function playRound(playerChoice, computerChoice){
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

// player's button behaviour and printed results
const buttons = document.querySelectorAll("div.buttonSymbol-container > button");
const playerDialog = document.getElementById("playerDialog");

Array.from(buttons).forEach(button => { 
    button.addEventListener('click', () => {
        let playerChoice = getPlayerChoice();
        playerDialog.innerHTML = `You've picked ${playerChoice}!`;
        playerDialog.classList.remove('fade-in');
        void playerDialog.offsetWidth;
        playerDialog.classList.add('fade-in');
        document.getElementById("roundStartBtn").addEventListener("click", () => game(playerChoice));
    });
});


// round 1 
function game(playerChoice) {
    const computerChoice = getComputerChoice();
    const score = document.getElementById("score");
    const result = playRound(playerChoice, computerChoice)

    if (result === winner) {
        score.innerHTML = parseInt(score.innerHTML) + 1;
    }
    else if (result === loser) {
        score.innerHTML = parseInt(score.innerHTML) + 0;
    }

    const resultsDialog = document.getElementById("resultsDialog");
    resultsDialog.innerHTML = result;
}