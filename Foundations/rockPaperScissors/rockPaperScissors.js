// Design a game of Rock, Paper, Scissors between a player and the computer. The game should be played until one player reaches 5 points.

// Declare constant array of choices
const choices = ["rock", "paper", "scissors"]

// Main function
function main() {
    let playerScore = 0;
    let computerScore = 0;
    playGame();
}  

// Play game function
function playGame() {
    
    // Set scores to 0
    // Get computer random choice
    computerChoice();
    // Get player choice
    playerChoice();
    // Compare player choice to computer choice and select winner
    alert("complete");
    // Add point to winner

    // Repeat play game function until one score === 5
}

// computerChoice function
function computerChoice() {
// Get computer choice from a list of Rock, Paper, or Scissors at random.
    let computerChoice = [(Math.floor(Math.random() * 3))];
    return computerChoice;
}

// playerChoice function
function playerChoice() {
// Get player choice from a list of Rock, Paper, Scissors
    let playerSelection =  prompt("Please enter Rock, Paper, or Scissors").toLowerCase();
    console.log(playerSelection);
    if (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
        alert("You must select one of the three options!")
        playerChoice();
    } else {
        return playerSelection;
    }
}

// roundWinner function
function roundWinner() {
// Compare computerChoice and playerChoice with switch statement
}

// gameWinner function
function gameWinner() {
// When playerScore || computerScore == 5; print that player as the winner and break out of playGame function.
}

main();