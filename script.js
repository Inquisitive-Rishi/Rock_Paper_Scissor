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

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice: rock, paper, scissor?"
    ).toLowerCase();
    const computerSelection = getComputerChoice(choices);
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
// declare the winner
// score >=3 is the winner.

// declare the winner wtth alert.
