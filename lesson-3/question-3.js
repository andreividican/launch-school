// Determine whether the following object of people
// and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// Answer:
Object.hasOwn(ages, 'Spot');

// Solution:
ages.hasOwnProperty('Spot');
