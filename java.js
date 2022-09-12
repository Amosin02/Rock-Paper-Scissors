let random = Math.floor(Math.random() * 3); 

function getComputerchoice(){
    return random;
}

console.log(getComputerchoice())

let computerCount = 0;
let playerCount = 0; 

//Rock-Paper-Scissors
const computerSelection = getComputerchoice();

console.log(game(playRound))

function game(playRound){
    for (let i = 0; i < 2; i++) {
        const playerSelection = window.prompt("Rock-Paper-Scissors");
        console.log(computerCount)
        console.log(playerCount)
            if(computerCount < playerCount){
                console.log("You Win! You won " + playerCount + " times")
            }
            else if(computerCount > playerCount){
                console.log("You Lose! Computer won " + playerCount + " times")
            }
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == "rock"){
    if (getComputerchoice() === 2){
        return "You Win! Rock beats Scissors (scissors)";
        playerCount++;
    }
    else if(getComputerchoice() === 1){
        return "You Lose! Paper beats Rock (paper)";
        computerCount++;
    }
    else{
        return "It's a Tie! You both pick Rock (rock)";
    }
 }
 else if(playerSelection.toLowerCase() == "paper"){
    if (getComputerchoice() === 2){
        return "You Lose! Scissors beats Paper (scissors)";
        computerCount++;
    }
    else if(getComputerchoice() === 1){
        return "It's a Tie! You both pick Paper (paper)";
    }
    else{
        return "You Win! Paper beats Rock (rock)";
        playerCount++;
    }
 }
 else if(playerSelection.toLowerCase() == "scissors"){
    if (getComputerchoice() === 2){
        return "It's a Tie! You both pick Scissors (scissors)";
    }
    else if(getComputerchoice() === 1){
        return "You Win! Scissors beats Paper (paper)";
        playerCount++;
    }
    else{
        return "You Lose! Rock beats Scissors (rock)";
        computerCount++;
    }
 }
 console.log("Computer score " +computerCount);
 console.log("Your score " + playerCount);
}





//computer pick a random number 1-35 36-67 68-100
//0=rock 1=paper 2=scissors
//player: pick rock=1, paper=2, scissor=3
//computer pick then compare sa player
//if player chose rock he should win if comp choose scissor
//if player chose paper he should win if comp choose rock
//if player chose scissors he should win if comp choose paper
//otherwise player lost
