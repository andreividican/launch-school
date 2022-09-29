const readLine = require("readline-sync");
const NUM_MONTHS_IN_YEAR = 12;

const prompt = (msg) => console.log(`>>> ${msg}`);
const yearsToMonths = (years) => {
  return years * NUM_MONTHS_IN_YEAR;
};

const isValidLoanAmount = (loan) => {
  while (loan <= 0) {
    prompt("Please enter a valid amount. Amount has to be greater than 0.");
    loan = readLine.question();
  }
  console.log(loan);
  return loan;
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

const calculateMonthlyPayment = (amount, apr, duration) => {
  let monthlyInterest = calculateMonthlyInterest(apr);
  let monthlyLoanDuration = yearsToMonths(duration);
  let monthlyPayment;
  if (apr === 0) {
    monthlyPayment = amount / monthlyLoanDuration;
  } else {
    monthlyPayment =
      amount *
      (monthlyInterest /
        (1 - Math.pow(1 + monthlyInterest, -monthlyLoanDuration)));
  }
  return monthlyPayment;
};

prompt(`Welcome to the Loan Calculator!`);
prompt(`What amount would you like to borrow?`);
const loanAmount = readLine.question();
isValidLoanAmount(loanAmount);
prompt("For how many years?");
const loanDuration = readLine.questionFloat();
isValidYear(loanDuration);
prompt("What is the APR?");
const annualPercentageRate = readLine.questionFloat();

function loanResult(amountRequested, aprRate, durationWanted) {
  let monthlyPayment = calculateMonthlyPayment(
    amountRequested,
    aprRate,
    durationWanted
  );
  return `The monthly payment will be: $${monthlyPayment.toFixed(2)}`;
}

console.log(loanResult(loanAmount, annualPercentageRate, loanDuration));
