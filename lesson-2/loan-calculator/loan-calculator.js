const readLine = require("readline-sync");
const NUM_MONTHS_IN_YEAR = 12;

const prompt = (msg) => console.log(`>>> ${msg}`);
const yearsToMonths = (years) => {
  return  years * NUM_MONTHS_IN_YEAR;
};

const isValidYear = (duration) => {
  while (!Number.isInteger(duration)) {
    prompt("Invalid number of years. Please enter a whole number.");
    duration = readLine.questionFloat();
  }

  return duration;
};

const calculateMonthlyInterest = (aprPercentage) => {
  return parseFloat(aprPercentage) / 100 / NUM_MONTHS_IN_YEAR;
};

prompt(`Welcome to the Loan Calculator!`);
prompt(`What amount would you like to borrow?`);
const loanAmount = readLine.questionFloat();
prompt("For how many years?");
const loanDuration = readLine.questionFloat();
isValidYear(loanDuration);
prompt("What is the APR?");
const annualPercentageRate = readLine.questionFloat();

const calculateMonthlyPayment = (amount, apr, duration) => {
  let monthlyInterest = calculateMonthlyInterest(apr);
  let monthlyLoanDuration = yearsToMonths(duration);
  let monthlyPayment =
    amount *
    (monthlyInterest /
      (1 - Math.pow(1 + monthlyInterest, -monthlyLoanDuration)));
  return monthlyPayment;
};

function loanResult(amountRequested, aprRate, durationWanted) {
  let monthlyPayment = calculateMonthlyPayment(
    amountRequested,
    aprRate,
    durationWanted
  );
  return `The monthly payment will be: $${monthlyPayment.toFixed(2)}`;
}

console.log(loanResult(loanAmount, annualPercentageRate, loanDuration));
