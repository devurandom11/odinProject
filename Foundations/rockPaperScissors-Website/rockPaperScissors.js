// Design a game of Rock, Paper, Scissors between a player and the computer. The game should be played until one player reaches 5 points.
// Declare variables
const computerChoices = ["rock", "paper", "scissors"];
let computerScore;
let playerScore;
let playerChoice;
let computerChoice;
// Page starts with "Play Game" button only. Pressing play game button starts game loop, removes "Play Game" button, and adds Rock, Paper, Scissors Images. Game continues until first player reaches 5 points.
// document.getElementById("play-game-btn").addEventListener("click", playGame)
// Score is set to 0 and scoreboard outline is printed on screen.
function playGame() {
  computerScore = 0;
  playerScore = 0;
  setUpRound();
  while (computerScore < 5 && playerScore < 5) {
    playRound();
  }
  if (computerScore == 5 && playerScore == 5) {
    tearDownGame();
  }
  playAgain();
}

// Triggered on Play Game click. Displays player choices.
function setUpRound() {
  // Hide play game button
  document.getElementById("play-game-btn").style.display = "none";
  // Display player choice buttons
  document.getElementById("rock-button").style.display = "inline-block";
  document.getElementById("paper-button").style.display = "inline-block";
  document.getElementById("scissors-button").style.display = "inline-block";
}

// Play Round Loop that runs until first player reaches 5 points
function playRound() {
  
}

// Player
// document.getElementById('rock-button').addEventListener("click", rock() {
//   playerChoice = "rock"
// })
// document.getElementById('rock-button').addEventListener("click", paper() {
//   playerChoice = "paper"
// })
// document.getElementById('rock-button').addEventListener("click", scissors(){
//   playerChoice = "scissors"
// })
// Computer
// computerChoice = computerChoices[Math.floor(Math.random() * 3)];
// alert(`Player Choice: ${playerChoice} and Computer Choice: ${computerChoice}`);

// Winner for the round is chosen and 1 point is added to score. Tie means scores unchanged.

// Score printed to screen. Record of choice selection printed to screen in column format:

// Player: 0 points      Computer: 2 points

// Rock picture(dim/transparent)             Paper picture(highlighted/bold)
// Scissors picture(dim/transparent)         Scissors picture(dim/transparent)
// Paper picture(dim/transparent)            Scissors picture(highlighted/bold)

// When one player reaches 5 points, end game loop and throw alert congratulating or berating (lol) player.

// Game buttons disappear and "Play Game" button returns.

// Header says "Do you want to play again?" instead of "Do you want to play?"
