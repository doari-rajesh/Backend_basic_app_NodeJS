const fs = require("fs");
const os = require("os");
const { notes, add } = require("./notes");
console.log(notes);
console.log(add(10, 212));

// console.log(fs);
// console.log(os.userInfo())

// FILE MODULE AND OS MODULE
// const { username } = os.userInfo();

// fs.appendFile("example.txt", `Hi ${username}\n`, "utf-8", () => {
//   console.log(`File created an write on that file\n`);
// });

// fs.appendFileSync(
//   "example.txt",
//   `Hi ${username} time is ${Date.now()}\n`,
//   "utf-8"
// );

// Callback in JS

// function add(value1, value2) {
//   console.log(`After addition value is ${value1 + value2}`);
// }

// function subtract(value1, value2) {
//   console.log(`After subtracton value is ${value1 - value2}`);
// }

// function divide(value1, value2) {
//   console.log(`After divison value is ${value1 / value2}`);
// }

// function mod(value1, value2) {
//   console.log(`After mod value is ${value1 % value2}`);
// }

// function operations(a, b, operation) {
//   operation(a, b);
// }

// operations(110, 20, add);
// operations(110, 20, subtract);
// operations(110, 20, divide);
// operations(3, 2, mod);

// Normal function in JS
// =======================
// function add(a, b) {
//   return a + b;
// }

// function in JS using variable
// ====================================
// let add = function add(a, b) {
//   return a + b;
// };

// Arrow function in JS
// ======================

// const add = (a, b) => {
//   return a + b;
// };

// const result = add(122, 4);
// console.log(result);

// IIFE - Immediately Invoked Function
// (function (a, b) {
//   console.log(a+b);
// })(200, 32);

// const date = new Date(1721640919424)
// console.log(date.toISOString().split('T')[0])
