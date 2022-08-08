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

function game() {

    let pcWins=0;
    let userWins = 0;
    for(let i=0; i<5; i++)
    {
        let playerSelection = prompt("rock, paper, or scissors? ");
        console.log(playerSelection);

        const computerSelection = getComputerChoice();
        console.log(computerSelection);

        let match = outcome(playerSelection, computerSelection);
        console.log(match);

        if (match == 'win')
        {
            userWins++;
        }
        else if (match =='lose')
        {
            pcWins++;
        }
        else
        {
            continue;
        }


    }
    if (userWins > pcWins)
    {
        console.log("you won the game!");
    }
    else if (userWins < pcWins)
    {
        console.log("loser!");
    }
    else
    {
        console.log("it's a tie!")
    }
}

game();