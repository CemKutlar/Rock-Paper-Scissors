function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random() * 3);
    let i = 0;
    for (i = 0; i < 3; ++i) {
        if(i == randNum) {
            return rps[randNum];
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    

    if(playerSelectionLowerCase == computerSelection) return "draw";
    else if(playerSelectionLowerCase == "rock" && computerSelection == "paper")  ++computerPoint;
    else if(playerSelectionLowerCase == "rock" && computerSelection == "scissors") ++playerPoint;
    else if(playerSelectionLowerCase == "paper" && computerSelection == "rock") ++playerPoint;
    else if(playerSelectionLowerCase == "paper" && computerSelection == "scissors") ++computerPoint;
    else if(playerSelectionLowerCase == "scissors" && computerSelection == "rock") ++computerPoint;
    else if(playerSelectionLowerCase == "scissors" && computerSelection == "paper") ++playerPoint;
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        let answer = prompt("Rock, paper or scissor?");
        let computerSelection = computerPlay();
        playRound(answer,computerSelection);
        console.log("Your Point: " + playerPoint + "\n" + "Bots Point: " + computerPoint);
        
    }
    if(playerPoint > computerPoint) console.log("You Win!!!");
    else if(playerPoint < computerPoint) console.log("You Lost!!!");
    else console.log("DRAW!");
}

let playerPoint = 0;
let computerPoint = 0;
game();