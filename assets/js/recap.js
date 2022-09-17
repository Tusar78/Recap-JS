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
  name: "dog",
  color: "brown",
  age: 7,
};

const { name, color, age } = animal;

console.log(name, color, age);

// Rest parameter
const car = {
  carName: "Fiat",
  color: "red",
  price: "$20k",
};

const { carName, ...rest } = car;
console.log(carName);

// When object going to undefined
const person = {
  personName: "Tusar",
  eyeColor: "Black",
  age: 23,
};

const { personName, ...personRest } = person || {};
console.log(personName);

// JavaScript Map
const arrayNum3 = [1, 2, 3, 4, 5];
console.log(...arrayNum3);
arrayNum3.map((num) => {
  console.log(num * num);
});

// Explore javascript filter method
const products = [
  { id: 1, name: "apple", price: 500, color: "golden" },
  { id: 2, name: "xiaomi", price: 124, color: "black" },
  { id: 3, name: "samsung", price: 200, color: "black" },
  { id: 4, name: "samsung2", price: 200, color: "black" },
  { id: 5, name: "lenovo", price: 300, color: "pink" },
  { id: 6, name: "xiaomi", price: 100, color: "pink" },
  { id: 7, name: "lenovo", price: 300, color: "pink" },
];

const needLenovo = products.filter((product) => product.name == "lenovo");
console.log(needLenovo);

const otherwisePink = products.filter((product) => product.color != "pink");
console.log(otherwisePink);

// Now lets talk about API

const BASE_URL = `https://jsonplaceholder.typicode.com`;


fetch(`${BASE_URL}/users`)
  .then((res) => res.json())
  .then((data) => console.log(data));


