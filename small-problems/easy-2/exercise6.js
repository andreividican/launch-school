//Write a function that returns the next to last word in the String passed to it as an argument.
// Words are any sequence of non-blank characters.
// You may assume that the input String will always contain at least two words.
function penultimate(word) {
  let wordArray = word.split(' ');
  wordArray = wordArray.filter((word, index) => index < wordArray.length - 1);
  return wordArray.pop();
}

// Solution:
function penultimate(words) {
  let wordsArray = words.split(" ");
  return wordsArray[wordsArray.length - 2];
};
