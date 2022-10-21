//random choice of computer
const choices = ["rock", "paper", "scissor"];

const getComputerChoice = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// console.log(getComputerChoice(choices));

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie.";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You loose! Paper beats Rock.";
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return "You win! Rock beats Scissor.";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats Rock.";
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    return "You loose! Scissor beats Paper.";
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return "You loose! Rock beats Scissor.";
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    return "You win! Scissor beats Paper.";
  }
}

// repeat this process 5 times
game();
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice: rock, paper, scissor?"
    ).toLowerCase();
    const computerSelection = getComputerChoice(choices);
    let message = playRound(playerSelection, computerSelection);
    console.log(message);

    if (message.includes("win")) {
      playerScore++;
    } else if (message.includes("loose")) {
      computerScore++;
    } else if (message.includes("tie")) {
      playerScore;
      computerScore;
    }
  }
  console.log(playerScore, computerScore);
}

// declare the winner
// score >=3 is the winner.

// declare the winner wtth alert.
