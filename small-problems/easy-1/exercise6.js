// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
const readLine = require('readline-sync');

console.log('Please enter an integer greater than 0');
let integer = readLine.question();
console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let action = readLine.question();
let result = 0;
for (let i = 1; i <= integer; i++) {
  if (action === 's') {
    result += i;
  } else if (action === 'p') {
    let a = (i + i) * i;
    result = a;
  }
}
console.log(`Result: ${result}`);

// Solution
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}
