// let num = 1_000_000_000_000;
// console.log(num);

// // let billion = 1000000000;
// let billion = 1.35e9;
// console.log(billion);

// let mcs = 1e-6;
// console.log(mcs);

// // toString(base)
// /*
// The method num.toString(base) returns a string representation of num in the numeral system with the given base.*/

// let myNum = 147;
// console.log(255..toString(16));

// Rounding -- Math.ceil, Math.floor, Math.round
// let num = 3.1;
// let num2 = -1.1;
// console.log(Math.floor(num));
// console.log(Math.floor(num2));
// console.log(Math.ceil(num));
// console.log(Math.ceil(num2));
// console.log(Math.round(num));
// console.log(Math.trunc(num));
// console.log(Math.trunc(num2));


// let num = 1.25;
// console.log(typeof (Math.round(num * 100) / 100));
// console.log(typeof(+num.toFixed(10)));

// console.log(2e3000);

// Imprecise calculation
// let sum = 0.1 + 0.2;
// console.log('' + 0.1 + ' + ' + 0.2);
// console.log(+sum.toFixed(2));

// isFinite, isNaN 
// console.log(isNaN(NaN));
// console.log(typeof NaN);
// let num = prompt('Enter your number', '');
// let result = Number.parseInt(num);
// if (isFinite(result)) {
//     console.log('Yes, good');
// } else {
//     console.log('Not a number');
// }

// SPecial method
// Object.is(NaN, NaN);

// let a = 20;
// let b = 20;
// let person = {};
// let person2 = {};
// console.log(Object.is(a, b));
// console.log(Object.is(person, person2));

// Object.is()

// let num = '12.5px';
// console.log(Number.parseFloat(num));

// const randomNumber = [];
// for (let i = 0; i < 10; i++) {
//     let ranNumber = Math.ceil(Math.random() * 5);
//     randomNumber.push(ranNumber);
// }
// console.log(randomNumber);

// console.log(Math.min(1,2,3));

// Sum numbers from the visitor
// let number1 = +prompt('Enter First Number', '');
// let number2 = +prompt('Enter Second Number', '');
// let summation = (number1 + number2).toFixed(2);
// alert(+summation);

// function readNumber() {
//     let num;
//     do {
//         num = prompt('Enter the valid number', '');
//     } while (!isFinite(num));
    
//     if (num === null || null === '') {
//         return null;
//     } else {
//         return +num;
//     }
// }
// alert(`Read: ${readNumber()}`)

// A random number from min to max
// function random(min, max) {
//     for (let i = 0; i < 10; i++) {
//         let ranNumber = min + Math.random() * (max - min);
//         console.log(Math.floor(ranNumber));
//     }
// }
// random(5, 10);

// let i = 0;
// while (i != 10) {
//     i += 0.2;
// }
// alert(i)