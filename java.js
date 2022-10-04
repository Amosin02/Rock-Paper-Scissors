let computerCount = 0;
let playerCount = 0; 

const choices = ["rock","paper","scissors"]

function start(){// the one who controls the round and is calling the entire game/functions
    for (let i = 1; i <= 1; i++){
    }
    end();
}

function play(){//rolls through the whole functions needed till a winner is found
    const playerSelect = playerSelection(); 
    const computerSelection = getComputerchoice();
    playRound(playerSelect, computerSelection);
}


function playerSelection(){// Getting the input of the user; still accepts words that are not Rock, paper, scissors
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null){
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    return input;
}

function getComputerchoice(){ // gets a random number and pick from the 3(rock,paper,scissors)
    return choices[Math.floor(Math.random() * choices.length)];
}

function end(){ //tells the winner at the end of every round
    if (playerCount > computerCount){
        console.log("You Win! This is your score: " + playerCount + " Computer: " + computerCount);
    }
    else if(computerCount > playerCount){
        console.log("You Lose! Computer: " + computerCount + " You: " + playerCount);
    }
    else{
        console.log("It's a tie")
    }
}

function playRound(playerSelect, computerSelection){ //checks wether playerSelect beats computerSelection
    if ((playerSelect == "rock" && computerSelection == "scissors") || 
        (playerSelect == "paper" && computerSelection == "rock") || 
        (playerSelect == "Scissors" && computerSelection == "paper")){ //the rules/code 
        playerCount++;
        console.log("You Win! " + playerSelect + " beats " + computerSelection);
    } else if (playerSelect === computerSelection){
        console.log("It's a tie");
    } else {
        computerCount++;
        console.log("You Lose");
    }
 }

 start();

 const rock = document.querySelector('.rock');
 rock.addEventListener('click', () => {
    console.log('rock');
 })

 const paper = document.querySelector('.paper');
 paper.addEventListener('click', () => {
    console.log('paper');
 })

 const scissors = document.querySelector('.scissors');
 scissors.addEventListener('click', () => {
    console.log('scissors');
 })

