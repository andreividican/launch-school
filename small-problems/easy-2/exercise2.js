// Write a program that will ask for user's name. The program will then greet the user.
// If the user writes "name!" then the computer yells back to the user.

const readLine = require('readline-sync');

console.log('What is your name?');
const NAME = readLine.question();
if (!(NAME.includes('!'))) {
  console.log(`Hello ${NAME}`);
} else {
  console.log(`HELLO ${NAME.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
}

// Solution
let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name?\n");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
