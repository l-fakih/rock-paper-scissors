// Pseudocode:
//Declare constant variable for the three options each:
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//Create a function to generate the computer's choice
//Use Math.Random to return a random number between 0-1 and then we will multiply it with the argument passed
//Then we will use Math.floor to round it down, the expected results should either be 0, 1 ,2
//If 0, computer generates rock. If 1, generates paper. If 2, scissors. 
function getComputerChoice(max){
    let number = Math.floor(Math.random() * max);
    if (number === 0){
        return rock;
    }
    else if (number === 1){
        return paper;
    }
    else return scissors;
}
//Create a function where the human will input their choice aand return it
function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    while (choice != rock && choice != paper && choice != scissors){
        choice = prompt("You can only type rock, paper, or scissors.");
    }
    return choice;
}
//Create a function to loop 5 rounds
function playGame(){
    //2 variables to keep count of the score for computer and human:
    let humanScore = 0;
    let compScore = 0;
    //iterate over the loop until the user scores 5 points
    while ((humanScore != 5) && (compScore != 5)){
        playRound(humanSelection, computerSelection)
    }
    //if user scores 5 points, print out a "you win" alert
    if (humanScore === 5){
        return alert("You won!");
    }
    //Create a function for the round:
    // Compare humanChoice with computerChoice, increment score to the winner
    function playRound(humanChoice, computerChoice) {
        let humanChoicee = humanChoice.toLowerCase(); 
        //Check if the opponents are tied:
        if (humanChoicee == computerChoice){
            return console.log(`It\'s a tie. Computer: ${computerChoice} You: ${humanChoicee}`);
        }
        //If not tied
        else if ((humanChoicee === "rock" && computerChoice === "paper") || (humanChoicee === "paper" && computerChoice === "scissors") || (humanChoicee === "scissors" && computerChoice === "rock")){
            compScore += 1;
            return console.log(`You lose! Computer: ${computerChoice} You: ${humanChoicee} Current Score: ${humanScore}`);
        }
        else if ((humanChoicee === "rock" && computerChoice === "scissors") || (humanChoicee === "paper" && computerChoice === "rock") || (humanChoicee === "scissors" && computerChoice === "paper")){
            humanScore += 1;
            return console.log(`Good job! Computer: ${computerChoice} You: ${humanChoicee} Current Score: ${humanScore}`);
        }
        }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);
playGame();
  