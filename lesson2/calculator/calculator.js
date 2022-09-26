const readLine = require("readline-sync");
const messages = require("./messages.json");

const POSSIBLE_OPERATIONS = ["1", "2", "3", "4"];

const prompt = (message) => console.log(`>>> ${message}`);
const invalidNumber = (num) => {
  return num.trimStart() === "" || Number.isNaN(Number(num));
};
const getUserInput = () => readLine.question(">").toLowerCase();

prompt(messages.select);
let selectedLanguage;
let language = readLine.question(">");
switch (language) {
  case "1":
    selectedLanguage = true;
    break;
  case "2":
    selectedLanguage = false;
    break;
  default:
    // TODO: When no valid language selected
    console.log(selectedLanguage);
    break;
}
const intro = selectedLanguage ? messages.en.intro : messages.ro.intro;
const outro = selectedLanguage ? messages.en.outro : messages.ro.outro;

const question1 = selectedLanguage
  ? messages.en.question1
  : messages.ro.question1;

const question2 = selectedLanguage
  ? messages.en.question2
  : messages.ro.question2;

const question3 = selectedLanguage
  ? messages.en.question3
  : messages.ro.question3;

const invalidInput = selectedLanguage
  ? messages.en.invalidNumber
  : messages.ro.invalidNumber;

const invalidOperation = selectedLanguage
  ? messages.en.invalidOperation
  : messages.ro.invalidOperation;

const question4 = selectedLanguage
  ? messages.en.question4
  : messages.ro.question4;

const playAgain = selectedLanguage
  ? messages.en.newOperation
  : messages.ro.newOperation;

const result = selectedLanguage ? messages.en.result : messages.ro.result;

prompt(intro);

while (true) {
  prompt(question1);
  let num1 = readLine.question(">");
  while (invalidNumber(num1)) {
    prompt(invalidInput);
    num1 = readLine.question(">");
  }

  prompt(question2);
  let num2 = readLine.question(">");
  while (invalidNumber(num2)) {
    prompt(invalidInput);
    num2 = readLine.question(">");
  }

  prompt(question3);
  let operation = readLine.question(">");

  while (!POSSIBLE_OPERATIONS.includes(operation)) {
    prompt(invalidOperation);
    operation = readLine.question(">");
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(num1) + Number(num2);
      break;
    case "2":
      output = Number(num1) - Number(num2);
      break;
    case "3":
      output = Number(num1) * Number(num2);
      break;
    case "4":
      output = Number(num1) / Number(num2);
      break;
  }
  prompt(result + output);

  prompt(question4);
  let userAnswer = getUserInput();

  while (userAnswer[0] !== "n" && userAnswer[0] !== "y") {
    prompt(playAgain);
    userAnswer = getUserInput();
  }

  if (userAnswer[0] === "n") {
    prompt(outro);
    break;
  }
}
