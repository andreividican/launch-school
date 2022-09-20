// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Answer:
for (let num = 1; num <= 99; num++) {
  if (Math.abs(num) % 2 === 1) {
      console.log(num)
  }
}

// Solution :
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}
