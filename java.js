let computerCount = 0;
let playerCount = 0; 

const choices = ["rock","paper","scissors"]

const div = document.querySelector('div');
const small = document.querySelector('#count');
const p = document.createElement('p');
const h1 = document.createElement('h1');

const count = document.createElement('h1');
const compCount = document.createElement('h1')
count.textContent = "Your score: " + playerCount;
compCount.textContent = " Computer's score: " + computerCount;
div.appendChild(count);
div.appendChild(compCount);

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
playerSelect = 'rock';
play();
})
rock.style.padding = "20px";

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
playerSelect = 'paper';
play();
})
paper.style.padding = "20px";

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
playerSelect = 'scissors';
play();
})
scissors.style.padding = "20px";

function start(){// the one who controls the round and is calling the entire game/functions
    for (let i = 1; i <= 1; i++){
    play(i);
    }
}

function play(){//rolls through the whole functions needed till a winner is found
    const computerSelection = getComputerchoice();
    playRound(playerSelect, computerSelection);
    if(computerCount == 5 || playerCount == 5){
        end()
        p.textContent = '';
        div.append(p);
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
        count.textContent =  "Your score: " + playerCount + ' (Winner)';
        reset();
    }
    else if(computerCount > playerCount){
        compCount.textContent = " Computer's score: " + computerCount + " (Winner)";
        reset();
    }
}

function playRound(playerSelect, computerSelection){ //checks wether playerSelect beats computerSelection
    if ((playerSelect == "rock" && computerSelection == "scissors") || 
        (playerSelect == "paper" && computerSelection == "rock") || 
        (playerSelect == "Scissors" && computerSelection == "paper")){ //the rules/code 
        playerCount++;
        p.textContent = "You Win! " + playerSelect + " beats " + computerSelection;
        count.textContent = "Your score: " + playerCount;
        compCount.textContent = " Computer's score: " + computerCount;
    } else if (playerSelect === computerSelection){
        p.textContent = "It's a tie";
        count.textContent = "Your score: " + playerCount;
        compCount.textContent = " Computer's score: " + computerCount;
    } else {
        computerCount++;
        p.textContent = "You Lose!";
        count.textContent = "Your score: " + playerCount;
        compCount.textContent = " Computer's score: " + computerCount;
    }
    div.append(p);
 }

 function reset(){
    computerCount = 0;
    playerCount = 0; 
    game = 0;
 }



