let random = Math.floor(Math.random() * 3); 

function getComputerchoice(){
    return random;
}

console.log(getComputerchoice())

const playerSelection = "Rock";
const computerSelection = getComputerchoice();
console.log(playRound(playerSelection, computerSelection))

function playRound(playerSelection, computerSelection){
 if (playerSelection == "rock"){
    if (getComputerchoice() === 2){
        console.log("You Win! Rock beats Scissors (scissors)");
    }
    else if(getComputerchoice() === 1){
        console.log("You Lose! Paper beats Rock (paper)");
    }
    else{
        console.log("It's a Tie! You both pick Rock (rock)");
    }
 }
 else if(playerSelection == "paper"){
    if (getComputerchoice() === 2){
        console.log("You Lose! Scissors beats Paper (scissors)");
    }
    else if(getComputerchoice() === 1){
        console.log("It's a Tie! You both pick Paper (paper)");
    }
    else{
        console.log("You Win! Paper beats Rock (rock)");
    }
 }
 else if(playerSelection == "scissors"){
    if (getComputerchoice() === 2){
        console.log("It's a Tie! You both pick Scissors (scissors)");
    }
    else if(getComputerchoice() === 1){
        console.log("You Win! Scissors beats Paper (paper)");
    }
    else{
        console.log("You Lose! Rock beats Scissors (rock)");
    }
 }
}



//computer pick a random number 1-35 36-67 68-100
//0=rock 1=paper 2=scissors
//player: pick rock=1, paper=2, scissor=3
//computer pick then compare sa player
//if player chose rock he should win if comp choose scissor
//if player chose paper he should win if comp choose rock
//if player chose scissors he should win if comp choose paper
//otherwise player lost
