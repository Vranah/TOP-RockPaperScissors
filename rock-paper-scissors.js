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

console.log(getComputerChoice());

console.log(getPlayerChoice());
