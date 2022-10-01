const readLine = require("readline-sync");
const NUM_MONTHS_IN_YEAR = 12;
const NUMBER_ZERO = 0;

const prompt = (msg) => console.log(`>>> ${msg}`);
const yearsToMonths = (years) => {
  return years * NUM_MONTHS_IN_YEAR;
};

const isValidLoanAmount = (loan) => {
  prompt(`What amount would you like to borrow?`);
  loan = readLine.questionFloat();
  while (loan <= NUMBER_ZERO) {
    prompt("Please enter a valid amount. Amount has to be greater than 0.");
    loan = readLine.questionFloat();
  }

  return loan;
};

const isValidYear = (duration) => {
  prompt("For how many years?");
  duration = readLine.questionFloat();
  while (!Number.isInteger(duration) || duration <= NUMBER_ZERO) {
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
  if (apr === NUMBER_ZERO) {
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
const loanAmount = isValidLoanAmount();
const loanDuration = isValidYear();
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
