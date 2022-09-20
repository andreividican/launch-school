// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Answer:
for (let number = 0; number < 100; number += 2) {
  console.log(number);
}
// Solution :
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}
