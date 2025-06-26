
const btns = document.querySelectorAll(`button`);
const round = document.querySelector(`.round`);
const roundInfo = document.querySelector(`.roundInfo`);
const score = document.querySelector(`.score`);




btns.forEach(btn => btn.addEventListener('click', event => {
    playGame();
    })
);



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

function getPlayerChoice(event) {
    let guess = event.target.textContent.toLowerCase();
    return guess;
        
}

// function getPlayerChoice() {
//     let guess = prompt(`Make a choice: <ROCK> <PAPER> <SCISSORS>`)
//         if(guess.toLowerCase() === `rock`){
//             return `rock`;
//         }else if (guess.toLowerCase() === `paper`) {
//             return `paper`;
//         }else if (guess.toLowerCase() === `scissors`) {
//             return `scissors`;
//         }
// }

function playRound(computerChoice, humanChoice) {
    
    if((computerChoice ===`rock` && humanChoice === `scissors`) 
       || (computerChoice ===`paper` && humanChoice === `rock`) 
       || (computerChoice ===`scissors` && humanChoice === `paper`)) {
        ++rounds;
        computerScore += 1;
        roundInfo.textContent = `${computerChoice} vs ${humanChoice} - YOU LOOSE!`;

    } else if((computerChoice ===`paper` && humanChoice === `scissors`) 
              || (computerChoice ===`rock` && humanChoice === `paper`) 
              || (computerChoice ===`scissors` && humanChoice === `rock`)) {
                ++rounds ;
                humanScore += 1;        
                roundInfo.textContent = `${computerChoice} vs ${humanChoice} - YOU WIN!`
    }else if(computerChoice === humanChoice) {
        ++rounds ;
        draw += 1;
        roundInfo.textContent =  `${computerChoice} vs ${humanChoice} - DRAW!`;
    }
    round.textContent = `Round: ${rounds}`;
    score.textContent = `PC: ${computerScore} Player:${humanScore} Draws:${draw}`
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;
let rounds = 0;


function playGame() {
    
    if(rounds === 5 && humanScore > computerScore){
        roundInfo.textContent =`YOU WON!`;
         }else if (rounds === 5 && computerScore > humanScore){
        roundInfo.textContent = `YOU LOST!`;
         }else if (rounds === 5){
            roundInfo.textContent = `DRAW!`;
             }else{getComputerChoice;
            playRound(getComputerChoice(), getPlayerChoice(event));
            }
        
}

//playGame()