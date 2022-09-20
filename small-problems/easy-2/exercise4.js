// Using the multiply() function from the "Multiplying Two Numbers" problem,
// write a function that computes the square of its argument
// (the square is the result of multiplying a number by itself).
const multiply = (num1, num2) => {
  return num1 * num2;
};

const square = num => multiply(num, num);

square(5);
square(-8);

// Further exploration:
function toPower(base, power) {
  if (power === 1) {
      return base;
  } else {
      return multiply(base, toPower(base, power -1));
  }
}

// Solution:
function square(number) {
  return multiply(number, number);
}
