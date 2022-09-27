//The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey.
// The && operator returns a truthy value if both of its operands are truthy,
// and a falsey value if either operand is falsey. This works great until you need only one,
// but not both, of two conditions to be truthy: the so-called exclusive or.
// In this exercise, you will write a function named xor that takes two arguments,
// and returns true if exactly one of its arguments is truthy, false otherwise.
// Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }

  return false;
}

// Solution 1:
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

// Solution 2:
function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}
