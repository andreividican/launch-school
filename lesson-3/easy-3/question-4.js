// Starting with the string:
// show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";
let inFrontOfFamouseWords = 'Four score and ';

console.log(`${inFrontOfFamouseWords}${famousWords}`);
console.log(inFrontOfFamouseWords.concat('', famousWords));

// Solution:
"Four score and " + famousWords;
"Four score and ".concat(famousWords);
