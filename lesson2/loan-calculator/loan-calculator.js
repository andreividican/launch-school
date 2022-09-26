const readLine = require("readline-sync");

const prompt = (msg) => console.log(`>>> ${msg}`);

prompt(`Welcome to the Loan Calculator!`);
prompt(`What amount would you like to borrow?`);
const loanAmount = readLine.questionFloat();
prompt("For how many years?");
const loanDuration = readLine.questionFloat();
prompt("What is the APR?");
const annualPercentageRate = readLine.questionFloat();

const yearsToMonths = (years) => years * 12;
const calculateMonthlyInterest = (aprPercentage) => {
  return parseFloat(aprPercentage) / 100 / 12;
};

function loanResult(loanAmount, apr, loanDuration) {
  let monthlyInterest = calculateMonthlyInterest(apr);
  let monthlyLoanDuration = yearsToMonths(loanDuration);
  let monthlyPayment =
    loanAmount *
    (monthlyInterest /
      (1 - Math.pow(1 + monthlyInterest, -monthlyLoanDuration)));
  return `The monthly payment will be: $${monthlyPayment.toFixed(2)}`;
}

console.log(loanResult(loanAmount, annualPercentageRate, loanDuration));
