/* eslint-disable max-len */
// What do you think the following code will output?

let nanArray = [NaN];
console.log(nanArray[0] === NaN); //false

// How can you reliably test if a value is NaN?
console.log(Number.isNaN(nanArray[0]));

