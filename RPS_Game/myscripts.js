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

function game(element) {
    
    //let answer = prompt("Rock, paper or scissor?");
    
    //console.log(ps_buttons);
    
    let computerSelection = computerPlay();
    let elemName;
    if(element.id == "rock_button") elemName = "rock";
    if(element.id == "paper_button") elemName = "paper";
    if(element.id == "scissors_button") elemName = "scissors";
    playRound(elemName, computerSelection);

    const playerPointHtml = document.getElementById("player_point");
    playerPointHtml.textContent = playerPoint;
    const computerPointHtml = document.getElementById("computer_point");
    computerPointHtml.textContent = computerPoint;

    //console.log(answer);
    // let computerSelection = computerPlay();
    // playRound(answer,computerSelection);
    if(computerPoint == 0 && playerPoint == 0) console.log("Game Start")
    else console.log("Your Point: " + playerPoint + "\n" + "Bots Point: " + computerPoint);
        
    if(computerPoint == 3) {
        console.log("YOU LOST THE GAME!");
        playerPoint = computerPoint = 0;
        drawCount = 0;
        return;
    }
    const roundResult = document.getElementById("round_result");
    if(playerPoint == 3) {
        roundResult.textContent = "YOU WON THE GAME!";
        playerPoint = computerPoint = 0;
        drawCount = 0;
        return;
    }
    
    if(playerPoint > tempPlayerPoint) roundResult.textContent = "You WON this round!";
    else if(computerPoint > tempCompPoint) roundResult.textContent = "You LOST this round!";
    else if(drawCount == 0) {roundResult.textContent = "DRAW!!!"; ++drawCount;}
    else roundResult.textContent = "DRAW!!! " + (++drawCount);
    tempPlayerPoint = playerPoint;
    tempCompPoint = computerPoint;
    
}
const ps_buttons = document.querySelector(".ps_buttons");
let answers = ps_buttons.querySelectorAll("button");
let drawCount = 0;
let tempPlayerPoint = 0;
let tempCompPoint = 0;
let playerPoint = 0;
let computerPoint = 0;
answers.forEach(element => {
    element.addEventListener("click", function(){
        game(element);
    }
)});


