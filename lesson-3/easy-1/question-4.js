// Using the following string, create a new string
// that contains all lowercase letters except for the first character,
//  which should be capitalized. (See the example output.)
let munstersDescription = "the Munsters are CREEPY and Spooky.";

// Answer:
const upperCaseLetter = munstersDescription[0].toUpperCase();
const lowerCaseLetters = munstersDescription.slice(1).toLowerCase();
const newString = upperCaseLetter + lowerCaseLetters;
console.log(newString);

// Solution:
console.log(munstersDescription.charAt(0).toUpperCase() +
munstersDescription.substring(1).toLowerCase());
