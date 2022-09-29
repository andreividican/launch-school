const readLine = require("readline-sync");
const MESSAGES = require("./messages.json");
const POSSIBLE_OPERATIONS = ["1", "2", "3", "4"];

const prompt = (message) => console.log(`>>> ${message}`);
const invalidNumber = (num) => {
  return num.trimStart() === "" || Number.isNaN(Number(num));
};
const getUserInput = () => readLine.question(">").toLowerCase();

prompt(MESSAGES.select);
let selectedLanguage;
let language = readLine.question(">");

function checkLanguage(lang) {
  if (lang === "1") {
    selectedLanguage = "en";
  } else if (lang === "2") {
    selectedLanguage = "ro";
  } else if (lang === "3") {
    selectedLanguage = "es";
  } else {
    prompt(MESSAGES.validLanguage);
    language = readLine.question(">");
    checkLanguage(language);
  }
}
checkLanguage(language);
let intro = MESSAGES[selectedLanguage].intro;
let outro = MESSAGES[selectedLanguage].outro;
let firstNumber = MESSAGES[selectedLanguage].firstNumber;
let secondNumber = MESSAGES[selectedLanguage].secondNumber;
let operationType = MESSAGES[selectedLanguage].operationType;
let runAgain = MESSAGES[selectedLanguage].runAgain;
let invalidInput = MESSAGES[selectedLanguage].invalidNumber;
let invalidOperation = MESSAGES[selectedLanguage].invalidOperation;
let newOperation = MESSAGES[selectedLanguage].newOperation;
let invalidDivizion = MESSAGES[selectedLanguage].invalidDivision;
let result = MESSAGES[selectedLanguage].result;

const askForFirstNumber = () => {
  prompt(firstNumber);
  let number = readLine.question(">");
  while (invalidNumber(number)) {
    prompt(invalidInput);
    number = readLine.question(">");
  }
  return number;
};

const askForSecondNumber = () => {
  prompt(secondNumber);
  let number = readLine.question(">");
  while (invalidNumber(number)) {
    prompt(invalidInput);
    number = readLine.question(">");
  }
  return number;
};

const askForOperation = () => {
  prompt(operationType);
  let operation = readLine.question(">");

  while (!POSSIBLE_OPERATIONS.includes(operation)) {
    prompt(invalidOperation);
    operation = readLine.question(">");
  }
  return operation;
};

const calculate = (number1, number2, operationType) => {
  let output;
  switch (operationType) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }
  return output;
};

const calculateAgain = () => {
  let userAnswer = getUserInput();
  while (userAnswer[0] !== "n" && userAnswer[0] !== "y") {
    prompt(newOperation);
    userAnswer = getUserInput();
  }
  return userAnswer;
};

prompt(intro);

while (true) {
  let num1 = askForFirstNumber();
  let num2 = askForSecondNumber();
  let operation = askForOperation();

  let getOutput = calculate(num1, num2, operation);
  prompt(result + getOutput);

  prompt(runAgain);
  let userAnswer = calculateAgain();

  if (userAnswer[0] === "n") {
    prompt(outro);
    break;
  }
}
