const choices = ["rock", "paper", "scissor"];

const getComputerChoice = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

console.log(getComputerChoice(choices));
