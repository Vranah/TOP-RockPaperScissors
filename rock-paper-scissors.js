function getComputerChoice() {
    let guess = Math.ceil(Math.random() * 3);
    return guess;
}

function getPlayerChoice() {
    let guess = parseInt(prompt(`Make a choice:
        1 - ROCK
        2 - PAPER
        3 - SCISSORS`))
        return guess;
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
