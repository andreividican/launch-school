// Write a program that prompts the user for two positive integers,
// and then prints the results of the following operations on those two numbers:
// addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

const readLine = require("readline-sync");

const prompt = (msg) => console.log(`>>> ${msg}`);
prompt("Enter the first number:");
let num1 = readLine.question();
prompt("Enter the second number:");
let num2 = readLine.question();
prompt(
  "Choose between: \n 1) Addition \n 2) Subtraction \n 3) Product \n 4) Quotient \n 5) Remainder \n 6) Power"
);
let operation = readLine.question();

const ADDITION = (num1, num2) => Number(num1) + Number(num2);
const SUBSTRACTION = (num1, num2) => Number(num1) - Number(num2);
const QUONTIENT = (num1, num2) => Number(num1) / Number(num2);
const PRODUCT = (num1, num2) => Number(num1) * Number(num2);
const REMAINDER = (num1, num2) => Number(num1) % Number(num2);

function toPower(base, power) {
  if (power === 1) {
    return base;
  } else {
    return PRODUCT(base, toPower(base, power - 1));
  }
}

const POWER = (num, power) => {
  return power === 1 ? num : PRODUCT(num, toPower(num, power - 1));
};
let RESULT;
if (operation === '1') {
  RESULT = ADDITION(num1,num2);
} else if (operation === '2') {
  RESULT = SUBSTRACTION(num1, num2);
} else if (operation === '4') {
  RESULT = QUONTIENT(num1, num2);
} else if (operation === '3') {
  RESULT = PRODUCT(num1, num2);
} else if (operation === '5') {
  RESULT = REMAINDER(num1, num2);
} else if (operation === '6') {
  RESULT = POWER(num1, num2);
}

console.log(RESULT);

// Solution:
const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);
