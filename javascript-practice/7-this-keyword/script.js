// 1. Unlike normal functions, arrow functions do not bind a new this.
// 2. Instead, they inherit this from the surrounding (lexical) scope — the place where they are written, not where they are called.

// Explain "this" keyword?

// this.a = 5;

// function getParam() {
//     console.log(this.a);
// }

// getParam();

// const user = {
//     name: "John",
//     age: 25,
//     greet: function() {
//         console.log(this.name)
//     }
// }

// const user = {
//     name: "John",
//     age: 25,
//     greet: function() {
//         const nestedArrow = () => {
//             console.log(this.name);
//         }

//         nestedArrow();
//     }
// }

// user.greet();

// const user = {
//   name: "Debkanta",
//   logMessage() {
//     console.log(this.name); // in this case the "this" cannot access the name - as it's being called inside a setTimeout
//   },
// };

// // way 1
// setTimeout(user.logMessage, 1000);

// // way 2 
// setTimeout(() => {
//   user.logMessage();
// }, 1000);


// const calculateSum = {
//   read() {
//     this.a = Number(prompt("Enter a = ", 0));
//     this.b = Number(prompt("Enter b = ", 0));
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   multiply() {
//     return this.a * this.b;
//   }
// }

// calculateSum.read();
// console.log(calculateSum.sum());
// console.log(calculateSum.multiply());

// var length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method() {
//     arguments[0]() // arguments = [callback, 2, 4]
//   }
// }

// object.method(callback, 2, 3)

const calc = {
  total: 0,
  add(num) {
    this.total += num;

    return this;
  },
  multiply(num) {
    this.total *= num;

    return this;
  },
  subtract(num) {
    this.total -= num;

    return this;
  }
}

const result = calc.add(10).multiply(5).subtract(30).add(10);

console.log(result.total);