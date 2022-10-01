/* eslint-disable max-len */
// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript and programming in general
// We'll explore this in much greater depth in a future Lesson.
// Create a new array that contains all of the above values, but in an un-nested format:

flintstones.flat();

// Solution 1
flintstones = [].concat(...flintstones);
// Solution 2
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
// Solution 3
let newFlintstones = [];
flintstones.forEach((element) => {
  newFlintstones = newFlintstones.concat(element);
});
