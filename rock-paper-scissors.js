function getComputerChoice() {
    let guess = Math.ceil(Math.random() * 3);
    if(guess === 1) {
        return "rock"
    }else if(guess === 2) {
        return "paper"
    }else if(guess === 3) {
        return "scissors"
    }   
}

    console.log(getComputerChoice());
    