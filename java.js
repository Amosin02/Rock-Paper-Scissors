let random = Math.floor(Math.random() * 3); 

function getComputerchoice(){
    return random;
}

const playerSelection = "rock";
const computerSelection = getComputerchoice();

function playRound(playerSelection, computerSelection){
 if (playerSelection == "rock"){
    if (getComputerchoice === 2){
        console.log("lose");
    }
    else if(getComputerchoice === 1){
        console.log("win");
    }
    else{
        console.log("tie");
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
