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
  prompt(`You chose ${userChoice}, the computer chose ${computerChoice}`);

  if (playerWins(userChoice, computerChoice)) {
    prompt("You won!");
  } else if (userChoice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt("Computer won!");
  }
};

const getUserInput = () => {
  return readLine.question(">").toLowerCase();
};

prompt(`RULES: \n${RULES.join("\n")}`);

while (true) {
  prompt(`Choose one: ${POSSIBLE_CHOICES.join(", ")}`);
  let userChoice = getUserInput();

  while (!POSSIBLE_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice. Please try again.");
    userChoice = getUserInput();
  }

  let randomIndex = Math.floor(Math.random() * POSSIBLE_CHOICES.length);
  let computerChoice = POSSIBLE_CHOICES[randomIndex];

  displayWinner(userChoice, computerChoice);

  prompt("Would you like to play again? (y/n)");
  let userAnswer = getUserInput();
  while (userAnswer[0] !== "n" && userAnswer[0] !== "y") {
    prompt('Please enter "y" or "n"');
    userAnswer = getUserInput();
  }

  if (userAnswer[0] === "n") break;
}
