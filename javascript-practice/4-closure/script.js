// let count = 0;

// (function printCount() {
//     if(count === 0) {
//         let count = 1;

//         console.log(count);
//     }

//     console.log(count);
// })();

// function createBase(num) {
//     return (secondNum) => {
//         console.log(num + secondNum);
//     }
// }

// var addSix = createBase(6);

// addSix(10); // returns 16
// addSix(21); // returns 27

// function find() {
//     let arr = [];

//     for(let i = 0; i < 1000000; i++) {
//         arr[i] = i * i;
//     }

//     return function(index) {
//         console.log(arr[index]);
//     }
// }

// const closure = find();

// console.time("6")
// closure(6);
// console.timeEnd("6"); // 6.94485ms

// console.time("50")
// closure(50);
// console.timeEnd("50"); // 0.353434ms

// Module Pattern
// var Module = (function () {
//     function privateMethod() {
//         console.log("Private");
//     }

//     return {
//         publicMethod: function() {
//             console.log("Public");
//         }
//     }
// })();

// Module.publicMethod();
// Module.privateMethod();

// _once
// function _once(fn) {
//   let called = false;

//   return function (...args) {
//     if (called) {
//       console.log("Already called!!!");
//     } else {
//       fn(...args);
//     }
//     called = true;
//   };
// }

// function greeting(name) {
//   console.log("Hello, " + name + "!");
// }

// const caller = _once(greeting);

// caller("Debkanta");
// caller("Debkanta");
// caller("Debkanta");


// Memoize Polyfill

