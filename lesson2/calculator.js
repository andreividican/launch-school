const readLine = require('readline-sync');

const prompt = msg => console.log(`>>> ${msg}`);

const invalidNumber = num => num.trimStart() === '' || Number.isNaN(Number(num));

prompt('Welcome to the Calculator!');
prompt('What is the first number?');
let num1 = readLine.question();

while (invalidNumber(num1)) {
  prompt('The number you\'ve entered is not valid, please try again.');
  num1 = readLine.question();
}

prompt('What is the second number?');
let num2 = readLine.question();

while (invalidNumber(num2)) {
  prompt('The number you\'ve entered is not valid, please try again.');
  num2 = readLine.question();
}

prompt('What operation would you like to perform? \n 1) Add \n 2) Subtract \n 3) Multiply \n 4) Divide');
let operation = readLine.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4, please select again: ');
  operation = readLine.question();
}

let output;
const RESULT_MSG = 'The result is: ';

switch (operation) {
  case '1':
    output = Number(num1) + Number(num2);
    break;
  case '2':
    output = Number(num1) - Number(num2);
    break;
  case '3':
    output = Number(num1) * Number(num2);
    break;
  case '4':
    output = Number(num1) / Number(num2);
    break;
}

prompt(RESULT_MSG + output);

