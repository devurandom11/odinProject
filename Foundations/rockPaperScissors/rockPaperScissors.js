// Design a game of Rock, Paper, Scissors between a player and the computer. The game should be played until one player reaches 5 points.

// Declare constant array of choices
const choices = ["rock", "paper", "scissors"]

// Main function
function main() {
    playGame();
}  

// Play game function
function playGame() {
    
    // Set scores to 0
    let playerScore = 0;
    let computerScore = 0
    // Get computer random choice
    let computerSelection = choices[computerChoice()];
    // Get player choice
    let playerSelection = playerChoice();
    // Compare player choice to computer choice and select winner
    let winner = roundWinner(playerSelection, computerSelection);
    // Debugging
    console.log(`Complete! User choice is ${playerSelection} and computer choice is ${computerSelection}`);
    console.log(`The winner of this round is ${winner} and the points are: player=${playerScore} -- computer=${computerScore}`)
    // End Debugging
    // Add point to winner
    
    // Repeat play game function until one score === 5
}

// computerChoice function
function computerChoice() {
// Get computer choice from a list of Rock, Paper, or Scissors at random.
    let computerSelection = [(Math.floor(Math.random() * 3))];
    return computerSelection;
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
function roundWinner(player, computer) {
// Compare computerChoice and playerChoice with switch statement
    if (player === computer) {
        alert("It's a tie");
        return "none";
    } else if (player === "rock" && computer === "paper") {
        alert("The computer wins :(");
        return "computer";
    } else if (player === "rock" && computer === "scissors") {
        alert("you win :)");
        return "player";
    } else if (player === "paper" && computer === "rock") {
        alert("you win :)");
        return "player";
    } else if (player === "paper" && computer === "scissors") {
        alert("The computer wins :(");
        return "computer";
    } else if (player === "scissors" && computer === "paper") {
        alert("you win :)");
        return "player"
    } else if (player === "scissors" && computer === "paper") {
        alert("The computer wins :(");
        return "computer";
    } 
}

// gameWinner function
function gameWinner() {
// When playerScore || computerScore == 5; print that player as the winner and break out of playGame function.
}

main();