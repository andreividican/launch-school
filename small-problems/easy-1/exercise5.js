// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
// The program must compute the tip, and then log both the tip and the total amount of the bill to the console.
// You can ignore input validation and assume that the user will enter numbers
// What is the bill? 200
// What is the tip percentage? 15
// The tip is $30.00
// The total is $230.00

const readLine = require('readline-sync');

console.log('What is the bill?');
let bill = readLine.question();
console.log('What is the tip percentage?');
let tipPercentage = readLine.question();

function calcTip(bill, percentage) {
  let totalTip = bill * (percentage/100);
  let totalBill = Number(bill) + Number(totalTip);
  console.log(`The tip is $${totalTip.toFixed(2)}`);
  console.log(`The total is $${totalBill.toFixed(2)} `)
}
calcTip(bill, tipPercentage);

