/*
1. Ask the user for the first number.
2. Ask the user for the second number.
3. Ask the user for what type of operation to perform.
4. The program should perform the operation of the two numbers.
5. The program should display the result.
*/

const readLine = require('readline-sync');

console.log('Welcome to the Calculator!');

console.log('What is the first number?');
const num1 = readLine.question();

console.log('What is the second number?');
const num2 = readLine.question();

console.log('What operation would you like to perform? \n 1) Add \n 2) Subtract \n 3) Multiply \n 4) Divide');
const operation = readLine.question();

let output;
const RESULT_MSG = 'The result is: ';
if (operation === '1') {
    output = RESULT_MSG + (Number(num1) + Number(num2));
} else if (operation === '2') {
    output = RESULT_MSG + (Number(num1) - Number(num2));
} else if (operation === '3') {
    output = RESULT_MSG + (Number(num1) * Number(num2));
} else if (operation === '4') {
    output = RESULT_MSG + (Number(num1) / Number(num2));
} else {
    output = 'An error has occurred. Please ensure you\'ve selected a correct operation and try again.';
}

console.log(output);

