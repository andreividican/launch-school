const readLine = require("readline-sync");
const POSSIBLE_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const RULES = [
  "Scissors cuts Paper",
  "Paper covers Rock",
  "Rock crushes Lizard",
  "Lizard poisons Spock",
  "Spock smashes Scissors",
  "Scissors decapitates Lizard",
  "Lizard eats paper",
  "Paper disproves Spock",
  "Spock vaporizes Rock",
  "Rock crushes Scissors",
];

const prompt = (message) => console.log(`>>> ${message}`);

const playerWins = (userChoice, computerChoice) => {
  return (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "rock" && computerChoice === "lizard") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "spock") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "lizard") ||
    (userChoice === "lizard" && computerChoice === "paper") ||
    (userChoice === "lizard" && computerChoice === "spock") ||
    (userChoice === "spock" && computerChoice === "rock") ||
    (userChoice === "spock" && computerChoice === "scissors")
  );
};

const displayWinner = (userChoice, computerChoice) => {
  prompt(`You chose ${userChoice.toUpperCase()}, the computer chose ${computerChoice.toUpperCase()}`);

  if (playerWins(userChoice, computerChoice)) {
    prompt("🎉 Congratulation, you have won! 🎉");
  } else if (userChoice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt("The Computer won!");
  }
};

const getUserInput = () => {
  return readLine.question(">").toLowerCase();
};

const getUserChoice = (choice) => {
  choice = getUserInput();

  while (!POSSIBLE_CHOICES.includes(choice)) {
    prompt("That's not a valid choice. Please try again.");
    choice = getUserInput();
  }

  return choice;
};

const getComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * POSSIBLE_CHOICES.length);
  let choice = POSSIBLE_CHOICES[randomIndex];

  return choice;
};

const playAgain = () => {
  let answer = getUserInput();
  while (answer !== "n" && answer !== "y") {
    prompt('Please enter "y" or "n"');
    answer = getUserInput();
  }

  return answer;
};

prompt(`RULES: \n${RULES.join("\n")}`);

while (true) {
  prompt(`Choose one: ${POSSIBLE_CHOICES.join(", ")}`);
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();

  displayWinner(userChoice, computerChoice);

  prompt("Would you like to play again?");
  let userAnswer = playAgain();

  if (userAnswer === "n") break;
}
