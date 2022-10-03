/* eslint-disable max-len */
// Starting with the string: Return a new string that swaps the case of all of the letters:

let munstersDescription = "The Munsters are creepy and spooky.";
let letters = munstersDescription.split("");
let newLetters = [];
letters.forEach((letter) => {
  if (letter === letter.toUpperCase()) {
    newLetters.push(letter.toLowerCase());
  } else {
    newLetters.push(letter.toUpperCase());
  }
});
newLetters.join("");

// Solution:
console.log(
  munstersDescription
    .split("")
    .map(function (char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("")
);
