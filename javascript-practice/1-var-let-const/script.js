// var vs let and const
// VAR, LET & CONST Interview Questions

// Question 1 : Variable Shadowing

// function test() {
//   let a = "Hello";

//   if (true) {
//     let a = "Hello"; // New value assigned
//     console.log(a);
//   }

//   console.log(a);
// }

// test();

// // Question 2 :  Illegal Shadowing

// function func() {
//   var a = "Hello";
//   let b = "Namaste";

//   if (true) {
//     let a = "Hi"; // Legal Shadowing
//     var b = "Bye"; // Illegal Shadowing
//     console.log(a); // It will print 'GeeksforGeeks'
//     console.log(b); // It will print error
//   }
// }
// test();

// // Question 3 : Hoisting

// console.log(a);

// var a = 10;

// // Question 4 : Temporal Dead Zone

// console.log(a, b, c);

// const c = 30;
// let b = 20;
// var a = 10;


let value = "Surprise!";

function f() {
  let value = "the closest value";

  function g() {
    debugger; // in console: type alert(value); Surprise!
  }

  return g;
}

let g = f();
g();


let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 45, surname: "Hathaway" }
];

function byField(fieldName) {
  return function(a, b) {
   return a?.[fieldName] > b?.[fieldName] ? 1 : -1
  }
}

users.sort(byField('age'))
console.log(users)