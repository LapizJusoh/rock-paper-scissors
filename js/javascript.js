const choiceSelection = ['ROCK','PAPER','SCISSORS'];
const rockSelection = document.querySelector(`#rock`);
const paperSelection = document.querySelector(`#paper`);
const scissorsSelection = document.querySelector(`#scissors`);

rockSelection.addEventListener(`click`, (e) => {
    
});

paperSelection.addEventListener(`click`, (e) => {
    
});

scissorsSelection.addEventListener(`click`, (e) => {
    
});


function getComputerChoice () {
    return choiceSelection[Math.floor(Math.random() * 3)];
}

/*
function getPlayerChoice () {
    let choice = prompt('Type which to play: Rock, paper or scissors','none');
    if (choice.toUpperCase() == 'ROCK') {
        return 'ROCK';
    } else if (choice.toUpperCase() == 'PAPER') {
        return 'PAPER';
    } else if (choice.toUpperCase() == 'SCISSORS') {
        return 'SCISSORS';
    } else {
        console.log(`Invalid- please try again (type in 'rock, paper or scissors')`);
        return getPlayerChoice();
    }
}
*/

const playerWin = (playerSelection,computerSelection) => {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    playerScore++;
}

const playerLose = (playerSelection,computerSelection) => {
    console.log(`You lose! ${playerSelection} lose to ${computerSelection}!`)
    computerScore++;
}

function playRound() {
    let playerSelection = getPlayerChoice();
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


let playerScore = 0;
let computerScore = 0;