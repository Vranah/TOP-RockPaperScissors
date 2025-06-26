function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3 +1);
    if(guess === 1) {
        return `rock`;
    }else if(guess === 2) {
        return `paper`;
    }else if(guess === 3) {
        return `scissors`;
    }
}

function getPlayerChoice() {
    let guess = prompt(`Make a choice: <ROCK> <PAPER> <SCISSORS>`)
        if(guess.toLowerCase() === `rock`){
            return `rock`;
        }else if (guess.toLowerCase() === `paper`) {
            return `paper`;
        }else if (guess.toLowerCase() === `scissors`) {
            return `scissors`;
        }
}

function playRound(computerChoice, humanChoice) {
    
    if((computerChoice ===`rock` && humanChoice === `scissors`) 
       || (computerChoice ===`paper` && humanChoice === `rock`) 
       || (computerChoice ===`scissors` && humanChoice === `paper`)) {
        computerScore++;
        console.log(` ${computerChoice} vs ${humanChoice} YOU LOOSE!`);

    } else if((computerChoice ===`paper` && humanChoice === `scissors`) 
              || (computerChoice ===`rock` && humanChoice === `paper`) 
              || (computerChoice ===`scissors` && humanChoice === `rock`)) {
                humanScore++;
                console.log(` ${computerChoice} vs ${humanChoice} YOU WIN!`);
    }else if(computerChoice === humanChoice) {
        draw++;
        console.log(` ${computerChoice} vs ${humanChoice} DRAW!`);
    }
        
    
    
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;


function playGame() {
    for(let i = 0; i <= 5; ++i) {
    if(i === 5 && humanScore > computerScore){
        console.log(`YOU WON!
            Final score: Player: ${humanScore} Computer: ${computerScore} Draws: ${draw}`);
         }else if (i === 5 && humanScore > computerScore){
        console.log(`YOU LOST!
                Final score: Player: ${humanScore} Computer: ${computerScore} Draws: ${draw}`);
         }else if (i === 5 && humanScore === computerScore){
            console.log(`DRAW!
                    Final score: Player: ${humanScore} Computer: ${computerScore} Draws: ${draw}`);
             }else{
            playRound(getComputerChoice(), getPlayerChoice());
            }
        }
}

playGame()