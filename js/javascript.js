const choiceSelection = ['ROCK','PAPER','SCISSORS'];
const rockSelection = document.querySelector(`#rock`);
const paperSelection = document.querySelector(`#paper`);
const scissorsSelection = document.querySelector(`#scissors`);

const getComputerChoice = () => {
    return choiceSelection[Math.floor(Math.random() * 3)];
}

const playRound = (choice) => {
    let playerSelection = choice;
    let computerSelection = getComputerChoice();

    if(playerSelection.toUpperCase() == 'ROCK') {
        if(computerSelection == 'ROCK') {
            console.log('Tie!');
        } else if (computerSelection == 'PAPER') {
            playerLose(playerSelection,computerSelection);
        } else {
            playerWin(playerSelection,computerSelection);
        }
    } else if(playerSelection.toUpperCase() == 'PAPER') {
        if(computerSelection == 'ROCK') {
            playerWin(playerSelection,computerSelection)
        } else if (computerSelection == 'PAPER') {
            console.log('Tie!');
        } else {
            playerLose(playerSelection,computerSelection);
        }
    } else if(playerSelection.toUpperCase() == 'SCISSORS') {
        if(computerSelection == 'ROCK') {
            playerLose(playerSelection,computerSelection);
        } else if (computerSelection == 'PAPER') {
            playerWin(playerSelection,computerSelection);
        } else {
            console.log('Tie!');
        }
    }
    console.log(`Current score - Player: ${playerScore} - Computer: ${computerScore}`)
}

const playGame = () => {
    for(let i=0; i<5; i++) {
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
    console.log(`You win! Player's ${playerSelection} beats the computer's ${computerSelection}!`);
    playerScore++;
}

const playerLose = (playerSelection,computerSelection) => {
    console.log(`You lose! Player's ${playerSelection} loses to the computer's ${computerSelection}!`)
    computerScore++;
}

let playerScore = 0;
let computerScore = 0;