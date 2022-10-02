/* eslint-disable max-len */
// The following function unnecessarily uses two return statements to return boolean values.
// Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

const isColorValid = (color) => color === "blue" || color === "green";

// Solution 1
function isColorValid(color) {
  return color === "blue" || color === "green";
}

// Solution 2
const isColorValid = (color) => ["blue", "green"].includes(color);
