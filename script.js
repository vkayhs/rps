const options = ["rock", "paper", "scissors"];

// Get a random choice for the computer
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

//Checks winning condition - same args as the playRound function
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

// playRound function that checks everything
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a tie!";
  } else if (result == "Player") {
    return `${playerSelection} beats ${computerSelection}. Player wins this round!`;
  } else {
    return `${computerSelection} beats ${playerSelection}. Computer wins this round!`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    let choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function game() {
  // Keep track of score
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!");
  // Only let's the game run for 5 rounds
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("----------------------");
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      scoreComputer++;
    }
  }
  console.log("Game Over!");
  if (scorePlayer > scoreComputer) {
    console.log("Player won!");
  } else if (scoreComputer > scorePlayer) {
    console.log("Computer wins!");
  } else {
    console.log("We have a tie!");
  }
}

game();
