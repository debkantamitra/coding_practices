// Example of f(a, b) into f(a)(b)

// function f(a) {
//     return function (b) {
//         return `${a} ${b}`
//     }
// }

// console.log(f(5)(4))

// Sum using currying
// function sum(a) {
//     return function(b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(sum(5)(4)(8))

// Partial/Convenience function  
// function evaluate(type) {
//   return function (a) {
//     return function (b) {
//       switch (type) {
//         case "sum": {
//           return a + b;
//         }
//         case "multiply": {
//           return a * b;
//         }
//         case "divide": {
//           return a / b;
//         }
//         case "substract": {
//           return a - b;
//         }
//         default: {
//             return "Not a valid operation"
//         }
//       }
//     };
//   };
// }

// console.log(evaluate("sum")(4)(3));
// console.log(evaluate("multiply")(4)(3));
// console.log(evaluate("divide")(4)(3));
// console.log(evaluate("substract")(4)(3));
// console.log(evaluate("what")(4)(3));



// hof to convert a normal function to curried

// function curry(fn) {
//     return function curried(...args) {
//         if(args.length >= fn.length) {
//             return fn(...args);
//         } else {
//             return function (arg) {
//                 return curried(...args, arg)
//             }
//         }
//     }
// }


// const sum = (a, b, c, d, e) => a + b + c + d + e;
// const totalSum = curry(sum);

// console.log(totalSum(1)(2)(3)(4)(5));


let nums = {
    a: 100,
    b: 200,
    title: "My Nums"
}

function multiplyByTwo() {
    for(key in this) {
        if(typeof this[key] === "number") {
            this[key] *= 2;
        }
    }
}

multiplyByTwo.apply(nums)

console.log(nums)
