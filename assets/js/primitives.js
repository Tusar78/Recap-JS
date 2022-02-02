// // Created an object
// let john = {
//     name: 'John',
//     sayHi: function() {
//         alert('Hi buddy!');
//     }
// };

// john.sayHi();

// // see string method
// let str = 'Hello, javaScript';
// alert(str.toUpperCase())

// // Number method 'toFixed'
// let myNumber = 5.12345;
// alert(myNumber.toFixed(4))

// alert(typeof 0);
// alert(typeof new Number(0));

// When 0 is truthy?
// let num = 0;
let num = new Number(0);
if (num) {
    alert(`${num} is truthy!`);
} else {
    alert(`${num} is falsy!`);
};