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

function updateOutput(notification) {
    const myOutput = document.getElementById("output");
    myOutput.insertAdjacentHTML("beforeend", "</br>"+notification);
}

function updateScore(playerScore, pcScore) {
    const myScore = document.getElementById("score");
    myScore.innerHTML="Player: "+playerScore+"|| PC: "+pcScore;
}

function clearScore() {
    const myDiv = document.getElementById("output");
    myDiv.innerHTML="";
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

// Starting Conditions
let pcWins = 0;
let userWins = 0;

function endgame(player) {
    clearScore();
    updateOutput("**********</br>"+player + " won 5 rounds, they won the game!</br>**********");
    pcWins=0;
    userWins=0;
}

function playGame(playerSelection) {

    // Check playerselection
    console.log(playerSelection);

    // Get randomized computer input
    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    // Run match
    let match = outcome(playerSelection, computerSelection);
    console.log(match);

    // Add to variables
    if (match == 'win')
    {
        userWins++;
        updateOutput("Player: "+playerSelection+"; Computer: "+computerSelection+"; User won that round!");
        updateScore(userWins,pcWins);
        updateOutput("----------");
    }
    else if (match =='lose')
    {
        pcWins++;
        updateOutput("Player: "+playerSelection+"; Computer: "+computerSelection+"; Computer won that round!");
        updateScore(userWins,pcWins);
        updateOutput("----------");
    }
    else {
        updateOutput("Player: "+playerSelection+"; Computer: "+computerSelection+"; That round was a tie! No points given.");
        updateOutput("----------");
    }
    

    // Check if match has 
    console.log(userWins);
    console.log(pcWins);

    if (userWins == 5)
    {
        endgame("user");
    }// bing bong
    else if (pcWins == 5)
    {
        endgame("computer");
    }
}

const btns = document.querySelectorAll("button");
console.log(btns);
btns.forEach(element => {
       element.addEventListener('click', event => {
        playerSelection = event.target.id;
        playGame(playerSelection);
       });
    });
