// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
let allAges = Object.assign(ages, additionalAges);
console.log(allAges);
// {
//     Herman: 32,
//     Lily: 30,
//     Grandpa: 5843,
//     Eddie: 10,
//     Marilyn: 22,
//     Spot: 237
//   }
