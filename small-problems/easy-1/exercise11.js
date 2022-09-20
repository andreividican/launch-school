// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument.
// The UTF-16 string value is the sum of the UTF-16 values of every character in the string.
// (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

function utf16Value(string) {
  let stringArray = string.split('');
  let characterSum = 0;
  stringArray.forEach(character => {
    characterSum += character.charCodeAt();
  })
  return characterSum;
}

// Solution:
function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}
