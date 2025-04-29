function getComputerChoice() {
    let guess = Math.ceil(Math.random() * 3);
    return guess;
}

function getPlayerChoice() {
    let guess = prompt(`Make a choice: <ROCK> <PAPER> <SCISSORS>`)
        if(guess.toLowerCase() === `rock`){
            return 1;
        }else if (guess.toLowerCase() === `paper`) {
            return 2;
        }else if (guess.toLowerCase() === `scissors`) {
            return 3;
        }
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getPlayerChoice();
    
    if(computerChoice === humanChoice){
        console.log(`It's a draw!`);
        
    }else if(computerChoice > humanChoice) {
        humanScore++;
        console.log(`YOU WON! The score is: Player: ${humanScore} Computer: ${computerScore}`);
        
    }else if(computerChoice < humanChoice){
        computerScore++;
        console.log(`YOU LOST! The score is: Player: ${humanScore} Computer: ${computerScore}`);
    }
    
}

for(let i = 0; i <= 5; i++) {
    if(i === 5){
        console.log(`GAME OVER!
            Final score: Player: ${humanScore} Computer: ${computerScore}`);
         }else{
            playRound();
         }
}
