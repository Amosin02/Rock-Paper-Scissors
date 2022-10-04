let computerCount = 0;
let playerCount = 0; 
let game = 0;

const choices = ["rock","paper","scissors"]

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
playerSelect = 'rock';
game++;
play();
})

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
playerSelect = 'paper';
game++;
play();
})

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
playerSelect = 'scissors';
game++;
play();
})

function start(){// the one who controls the round and is calling the entire game/functions
    for (let i = 1; i <= 1; i++){
    play(i);
    }
    end();
}

function play(){//rolls through the whole functions needed till a winner is found
    const computerSelection = getComputerchoice();
    playRound(playerSelect, computerSelection);
    if(game == 5){
        end()
    }
}


function playerSelection(){
}

//function playerSelection(){// Getting the input of the user; still accepts words that are not Rock, paper, scissors
//  let input = prompt("Type Rock, Paper, or Scissors");
//    while (input == null){
//        input = prompt("Type Rock, Paper, or Scissors");
//    }
//    input = input.toLowerCase();
//    return input;
//}

function getComputerchoice(){ // gets a random number and pick from the 3(rock,paper,scissors)
    return choices[Math.floor(Math.random() * choices.length)];
}

function end(){ //tells the winner at the end of every round
    if (playerCount > computerCount){
        console.log("You Win! This is your score: " + playerCount + " Computer: " + computerCount);
        reset();
    }
    else if(computerCount > playerCount){
        console.log("You Lose! Computer: " + computerCount + " You: " + playerCount);
        reset();
    }
    else{
        console.log("Tied!")
        reset();
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

 function reset(){
    computerCount = 0;
    playerCount = 0; 
    game = 0;
 }



