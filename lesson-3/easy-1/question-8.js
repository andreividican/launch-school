// How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
let dino = ['Dino'];
// Answer:
flintstones.push('Dino');
flintstones = flintstones.concat(dino);
// Solution 3:
flintstones[flintstones.length] = "Dino";
