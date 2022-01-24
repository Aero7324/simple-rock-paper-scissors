function computerPlay() {
    let a = Math.floor(Math.random() * 3) + 1;

    if(a == 1)
        return "rock";
    
    if(a == 2)
        return "paper";
    
    if(a == 3)
        return "scissors";
}

function round(playerSelection, computerSelection, playerWins, computerWins) {
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection){
        case 'rock':
            if(computerSelection == 'paper'){
                return ["You Lose! Paper beats Rock", "computer"]
            }
            else if(computerSelection == 'scissors'){
                return ["You Win! Rock beats Scissors", "player"]
            }
            else
                return ["Tied!"]
        case 'paper':
            if(computerSelection == 'paper')
                return ["Tied!"]
            else if(computerSelection == 'scissors'){
                return ["You Lose! Scissors beats Paper", "computer"]
            }
            else{
                return ["You Win! Paper beats Rock", "player"]
            }
        case 'scissors':
            if(computerSelection == 'paper') {
                return ["You Win! Scissors beats Paper", "player"]
            }
            else if(computerSelection == 'scissors')
                return ["Tied"]
            else{
                return ["You Lose! Rock beats Scissors", "computer"]
            }
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("What do you choose?")
        let computerSelection = computerPlay();

        console.log(round(playerSelection, computerSelection, playerWins, computerWins)[0]);
        if (round(playerSelection, computerSelection, playerWins, computerWins)[1] == 'player')
            playerWins++
        if (round(playerSelection, computerSelection, playerWins, computerWins)[1] == 'computer')
            computerWins++
    }

    if(playerWins > computerWins)
        console.log("The Player wins!")
    else if(computerWins > playerWins)
        console.log("The Computer wins!")
    else
        console.log("It's a tie!")
}