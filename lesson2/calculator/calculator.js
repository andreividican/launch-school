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

function checkLang(lang) {
  if (lang === "1") {
    selectedLanguage = "en";
  } else if (lang === "2") {
    selectedLanguage = "ro";
  } else if (lang === "3") {
    selectedLanguage = "es";
  } else {
    prompt(MESSAGES.validLanguage);
    language = readLine.question(">");
    checkLang(language);
  }
}
checkLang(language);
let intro;
let outro;
let question1;
let question2;
let question3;
let question4;
let invalidInput;
let invalidOperation;
let playAgain;
let result;

switch (selectedLanguage) {
  case "en":
    intro = MESSAGES.en.intro;
    outro = MESSAGES.en.outro;
    question1 = MESSAGES.en.question1;
    question2 = MESSAGES.en.question2;
    question3 = MESSAGES.en.question3;
    question4 = MESSAGES.en.question4;
    invalidInput = MESSAGES.en.invalidNumber;
    invalidOperation = MESSAGES.en.invalidOperation;
    playAgain = MESSAGES.en.playAgain;
    result = MESSAGES.en.result;
    break;
  case "ro":
    intro = MESSAGES.ro.intro;
    outro = MESSAGES.ro.outro;
    question1 = MESSAGES.ro.question1;
    question2 = MESSAGES.ro.question2;
    question3 = MESSAGES.ro.question3;
    question4 = MESSAGES.ro.question4;
    invalidInput = MESSAGES.ro.invalidNumber;
    invalidOperation = MESSAGES.ro.invalidOperation;
    playAgain = MESSAGES.ro.playAgain;
    result = MESSAGES.ro.result;
    break;
  case "es":
    intro = MESSAGES.es.intro;
    outro = MESSAGES.es.outro;
    question1 = MESSAGES.es.question1;
    question2 = MESSAGES.es.question2;
    question3 = MESSAGES.es.question3;
    question4 = MESSAGES.es.question4;
    invalidInput = MESSAGES.es.invalidNumber;
    invalidOperation = MESSAGES.es.invalidOperation;
    playAgain = MESSAGES.es.playAgain;
    result = MESSAGES.es.result;
    break;
}

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
