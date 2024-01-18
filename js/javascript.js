const choiceSelection = ['ROCK','PAPER','SCISSORS'];
const rockSelection = document.querySelector(`#rock`);
const paperSelection = document.querySelector(`#paper`);
const scissorsSelection = document.querySelector(`#scissors`);
const currentRound = document.querySelector(`#current-round`);
const results = document.querySelector(`#results`);
const scoringBoard = document.querySelector(`#scoring-board`)

const getComputerChoice = () => {
    return choiceSelection[Math.floor(Math.random() * 3)];
}

const playRound = (choice) => {
    let playerSelection = choice;
    let computerSelection = getComputerChoice();

    if(playerSelection.toUpperCase() == 'ROCK') {
        if(computerSelection == 'ROCK') {
            results.textContent = 'Tie!';
        } else if (computerSelection == 'PAPER') {
            playerLose(playerSelection,computerSelection);
        } else {
            playerWin(playerSelection,computerSelection);
        }
    } else if(playerSelection.toUpperCase() == 'PAPER') {
        if(computerSelection == 'ROCK') {
            playerWin(playerSelection,computerSelection)
        } else if (computerSelection == 'PAPER') {
            results.textContent = 'Tie!';
        } else {
            playerLose(playerSelection,computerSelection);
        }
    } else if(playerSelection.toUpperCase() == 'SCISSORS') {
        if(computerSelection == 'ROCK') {
            playerLose(playerSelection,computerSelection);
        } else if (computerSelection == 'PAPER') {
            playerWin(playerSelection,computerSelection);
        } else {
            results.textContent = 'Tie!';
        }
    }
    scoringBoard.textContent = `Current score - Player: ${playerScore} - Computer: ${computerScore}`;
}

const playGame = () => {
    for(let i=0; i<5; i++) {
        currentRound.textContent = `<h1>Round ${i}</h1>`
        playRound();
    }
}

rockSelection.addEventListener(`click`, () => {
    let choice = 'ROCK'
    playRound(choice);
});

paperSelection.addEventListener(`click`, () => {
    let choice = 'PAPER'
    playRound(choice);
});

scissorsSelection.addEventListener(`click`, () => {
    let choice = 'SCISSORS'
    playRound(choice);
});

const playerWin = (playerSelection,computerSelection) => {
    results.textContent = `You win! Player's ${playerSelection} beats the computer's ${computerSelection}!`;
    playerScore++;
}

const playerLose = (playerSelection,computerSelection) => {
    results.textContent = `You lose! Player's ${playerSelection} loses to the computer's ${computerSelection}!`;
    computerScore++;
}

let playerScore = 0;
let computerScore = 0;