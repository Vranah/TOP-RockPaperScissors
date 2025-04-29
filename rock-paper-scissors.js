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

function playRound(computerChoice, humanChoice) {
    
    if(computerChoice === humanChoice){
        draw++;
        console.log(`It's a draw!`);
        
    }else if(computerChoice > humanChoice) {
        humanScore++;
        console.log(`YOU WON! The score is: Player: ${humanScore} Computer: ${computerScore}`);
        
    }else if(computerChoice < humanChoice){
        computerScore++;
        console.log(`YOU LOST! The score is: Player: ${humanScore} Computer: ${computerScore}`);
    }
    
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;

for(let i = 0; i <= 5; i++) {
    if(i === 5 && humanScore > computerScore){
        console.log(`YOU WON!
            Final score: Player: ${humanScore} Computer: ${computerScore} Draw: ${draw}`);
         }else if (i === 5 && humanScore > computerScore){
        console.log(`YOU LOST!
                Final score: Player: ${humanScore} Computer: ${computerScore} Draw: ${draw}`);
         }else if (i === 5 && humanScore == computerScore){
            console.log(`DRAW!
                    Final score: Player: ${humanScore} Computer: ${computerScore} Draw: ${draw}`);
             }else{
            playRound(getComputerChoice(), getPlayerChoice());
         }
}
