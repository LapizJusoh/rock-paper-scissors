const choiceSelection = ['ROCK','PAPER','SCISSORS'];

function getComputerChoice () {
    return choiceSelection[Math.floor(Math.random() * 3)];
}

const playerWin = () => {
    console.log(`You win! ${playerSelection.toUpperCase()} beats ${computerSelection}!`);
}

const playerLose = () => {
    console.log(`You lose! ${playerSelection.toUpperCase()} lose to ${computerSelection}!`)
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() == 'ROCK') {
        if(computerSelection == 'ROCK') {
            console.log('Tie!');
        } else if (computerSelection == 'PAPER') {
            playerLose();
        } else {
            playerWin();
        }
    } else if(playerSelection.toUpperCase() == 'PAPER') {
        if(computerSelection == 'ROCK') {
            playerWin()
        } else if (computerSelection == 'PAPER') {
            console.log('Tie!');
        } else {
            playerLose();
        }
    } else if(playerSelection.toUpperCase() == 'SCISSORS') {
        if(computerSelection == 'ROCK') {
            playerLose();
        } else if (computerSelection == 'PAPER') {
            playerWin();
        } else {
            console.log('Tie!');
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice()

playRound(playerSelection, computerSelection);

// console.log(getComputerChoice());