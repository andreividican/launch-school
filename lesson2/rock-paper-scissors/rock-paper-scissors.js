const readLine = require("readline-sync");
const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];

function prompt(msg) {
  console.log(`>>> ${msg}`);
}

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, the computer chose ${computerChoice}`);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    prompt("You won!");

  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    prompt("You've lost!");
  } else {
    prompt("It's a tie");
  }
}

while (true) {
  prompt(`Choose one: ${POSSIBLE_CHOICES.join(", ")}`);
  let userChoice = readLine.question(">").toLowerCase();

  while (!POSSIBLE_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice. Please try again.");
    userChoice = readLine.question(">").toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * POSSIBLE_CHOICES.length);
  let computerChoice = POSSIBLE_CHOICES[randomIndex];

  displayWinner(userChoice, computerChoice);

  prompt("Would you like to play again? (y/n)");
  let userAnswer = readLine.question(">").toLowerCase();
  while (userAnswer[0] !== "n" && userAnswer[0] !== "y") {
    prompt('Please enter "y" or "n"');
    userAnswer = readLine.question(">").toLowerCase();
  }

  if (userAnswer[0] === "n") break;
}
