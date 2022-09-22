const readLine = require("readline-sync");
const messages = require("./messages.json");

const prompt = (msg) => console.log(`>>> ${msg}`);

const invalidNumber = (num) => {
  return num.trimStart() === "" || Number.isNaN(Number(num));
};

prompt(messages.select);
let language = readLine.question();
let selectedLanguage;
switch (language) {
  case "1":
    selectedLanguage = true;
    break;
  case "2":
    selectedLanguage = false;
    break;
}

const INTRO = selectedLanguage ? messages.en.intro : messages.ro.intro;
const QUESTION1 = selectedLanguage
  ? messages.en.question1
  : messages.ro.question1;

const QUESTION2 = selectedLanguage
  ? messages.en.question2
  : messages.ro.question2;

const QUESTION3 = selectedLanguage
  ? messages.en.question3
  : messages.ro.question3;

const INVALID_NUMBER = selectedLanguage
  ? messages.en.invalidNumber
  : messages.ro.invalidNumber;

const INVALID_OPERATION = selectedLanguage
  ? messages.en.invalidNumber
  : messages.ro.invalidNumber;

const RESULT = selectedLanguage ? messages.en.result : messages.ro.result;

prompt(INTRO);
prompt(QUESTION1);
let num1 = readLine.question();

while (invalidNumber(num1)) {
  prompt(INVALID_NUMBER);
  num1 = readLine.question();
}

prompt(QUESTION2);
let num2 = readLine.question();

while (invalidNumber(num2)) {
  prompt(INVALID_NUMBER);
  num2 = readLine.question();
}

prompt(QUESTION3);
let operation = readLine.question();

while (!["1", "2", "3", "4"].includes(operation)) {
  prompt(INVALID_OPERATION);
  operation = readLine.question();
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

prompt(RESULT + output);
