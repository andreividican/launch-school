// eslint-disable-next-line max-len
// Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];

numbers.splice();
numbers.slice(0, 0);

// Solution 1
numbers.length = 0;
// Solution 2
numbers.splice(0, numbers.length);
// Solution 3
while (numbers.length) {
  numbers.pop();
}
