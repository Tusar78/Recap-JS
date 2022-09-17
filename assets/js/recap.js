// Template String
const str1 = "Rakibul";
const str2 = "Islam";

console.log(`Hello ${str1} ${str2}`);

// Spread Operator
const arrayNum1 = [1, 2, 3, 4, 5];
const arrayNum2 = [6, 7, 8, 9];

arrayNum1.push(...arrayNum2);

console.log(arrayNum1);

// Destructuring
const animal = {
  name: 'dog',
  color: 'brown',
  age: 7
}

const {name, color, age} = animal;

console.log(name, color, age);