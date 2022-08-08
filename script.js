function getComputerChoice() {
    let diceroll = 3*Math.random();
    let hand;
    if (diceroll < 1)
    {
        hand = "rock";
    }
    else if (diceroll < 2)
    {
        hand = "paper";
    }
    else
    {
        hand = "scissors";
    }
    return hand;
}

function outcome(hand1, hand2) {
    switch(hand1) {
        case 'rock':
            switch(hand2) {
                case 'rock': 
                    return "tie";
                case 'scissors':
                    return "win";
                case 'paper':
                    return "lose";
            }
        case 'paper':
            switch(hand2) {
                case 'rock': 
                    return "win";
                case 'scissors':
                    return "lose";
                case 'paper':
                    return "tie";
            }
        case 'scissors':
            switch(hand2) {
                case 'rock': 
                    return "lose";
                case 'scissors':
                    return"tie";
                case 'paper':
                    return "win";
            }
    }
}
const playerSelection = "rock";
console.log(playerSelection);

const computerSelection = getComputerChoice();
console.log(computerSelection);


console.log(outcome(playerSelection, computerSelection));