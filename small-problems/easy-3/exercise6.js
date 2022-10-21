/* eslint-disable max-len */
// Madlibs is a simple game where you create a story template with "blanks" for words.
// You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.


const readLine = require('readline-sync');

console.log('Enter a noun');
const noun = readLine.question();
console.log('Enter a verb');
const verb = readLine.question();
console.log('Enter a adjective');
const adjective = readLine.question();
console.log('Enter a adverb');
const adverb = readLine.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} walks ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`);

// Solution
let readlineSync = require("readline-sync");

console.log("Enter a noun:");
let noun = readlineSync.prompt();

console.log("Enter a verb:");
let verb = readlineSync.prompt();

console.log("Enter an adjective:");
let adjective = readlineSync.prompt();

console.log("Enter an adverb:");
let adverb = readlineSync.prompt();

let sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);
