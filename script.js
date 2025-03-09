// Pseudocode:
//Declare constant variable for the three options each:
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

//Get the buttons from the HTML
let buttons = document.querySelectorAll(".button");

//Keep track of the score until it reaches 5
let humanScore = 0;
let compScore = 0;
let scoreHuman = document.querySelector(".humanScore");
let scoreComp = document.querySelector(".compScore");

//Human choice & computer choice
let humanChoice = document.querySelector(".humanChoice");
let compChoice = document.querySelector(".compChoice");
//Select the parent node to the scores
let score = document.querySelector(".score");

//Select the text to update the player
let update = document.querySelector(".update");

//Select the element to add the 'Play Again' button as a child node once game over
let div = document.querySelector(".end");
let button = document.createElement("button");
button.className = "playAgain";
button.textContent = "Play Again";

//Create a function to generate the computer's choice
//Use Math.Random to return a random number between 0-1 and then we will multiply it with the argument passed
//Then we will use Math.floor to round it down, the expected results should either be 0, 1 ,2
//If 0, computer generates rock. If 1, generates paper. If 2, scissors. 
//Display what the computer chose in the HTML element
function getComputerChoice(max){
    let number = Math.floor(Math.random() * max);
    if (number === 0){
        compChoice.textContent = "Computer: Rock";
        return rock;
    }
    else if (number === 1){
        compChoice.textContent = "Computer: Paper";
        return paper;
    } 
    else{
        compChoice.textContent = "Computer: Scissors";
        return scissors;
    }
}

//Listen to what the player clicks and run the function
//Display what the player chose inside the HTML
function getHumanChoice(){
    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            buttonChoice = button.textContent;
            humanChoice.textContent = `Player: ${buttonChoice}`;
            playGame(buttonChoice);
        })
    })
}

//Create a function to start the game by passing player's and computer's choice
function playGame(humanChoice) {
    //2 variables to keep count of the score for computer and human:
    let humanSelection = humanChoice;
    let computerSelection = getComputerChoice(3);
    playRound(humanSelection, computerSelection)
}
   
//Create a function for the round:
//Compare humanChoice with computerChoice, increment score to the winner
function playRound(humanChoice, computerChoice) {
    //Check if the opponents are tied:
    if (humanChoice == computerChoice){
        update.textContent = "It\'s a tie.";
    }
    //If not tied
    if ((humanChoice === rock && computerChoice === paper) || 
    (humanChoice === paper && computerChoice === scissors) || 
    (humanChoice === scissors && computerChoice === rock)){
        ++compScore;
        //Display computer won
        update.textContent = "Hard luck";
    }
    if ((humanChoice === rock && computerChoice === scissors) || (humanChoice === paper && computerChoice === rock) || (humanChoice === scissors && computerChoice === paper)){
        ++humanScore;
        //Display human won
        update.textContent = "Good job!";
    }
    //Display the scores
    scoreHuman.textContent = humanScore;
    scoreComp.textContent = compScore;

    //Pass the argument to detect the outcome
    if (humanScore === 5){
        gameOver('human');
    }
    else if (compScore === 5){
        gameOver('computer');
    }
}

//Create a function to declare the winner and end the game
function gameOver(winner){
    //Disable the buttons to stop taking player's choice
    buttons.forEach((button) => (button.disabled = true));
    if (winner === 'human'){
        //End the round when one of them reaches a score of 5
        update.textContent = "Congratulations! You beat the computer";
        //Add a button to repeat the game once score reaches 5
        div.appendChild(button);
        button.style.display = 'block';
    }
    if (winner === 'computer'){
        update.textContent = "You\'ve lost. Try again?";
        div.appendChild(button);
        button.style.display = 'block';
    }

    //When user presses the play again button, restart the whole game
    button.addEventListener("click", function(){
        restartGame();
    })
}

//Another function to restart the game after the play again button was pressed
function restartGame(){
    humanScore = 0;
    compScore = 0;
    scoreComp.textContent = '';
    scoreHuman.textContent = '';
    update.textContent = '';
    humanChoice.textContent = '';
    compChoice.textContent = '';
    button.style.display = 'none';
    buttons.forEach((button) => (button.disabled = false));
}

//Let the battle begin
getHumanChoice();