console.log("Compose and Pipe");

function pipe() {
  const args = arguments;

  return function (num) {
    let result = num;
    const lastIndex = args.length - 1;

    for (let i = 0; i <= lastIndex; i++) {
      result = args[i](result);
    }

    return result;
  };
}

// using reducer
// function pipe() {
//   const args = [...arguments];

//   return function (num) {
//     return args.reduce((acc, fn) => {
//       return fn(acc);
//     }, num);
//   };
// };

function compose() {
  const args = arguments;

  return function (num) {
    let result = num;
    const lastIndex = args.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
      result = args[i](result);
    }

    return result;
  };
}

// using reducer
// function compose() {
//     const args = [...arguments];

//     return function(num) {
//         return args.reverse().reduce((acc, fn) => {
//             return fn(acc)
//         }, num);
//     }
// }

const addFive = (num) => {
  return num + 5;
};

const substractTwo = (num) => {
  return num - 2;
};

const multiplyFour = (num) => {
  return num * 4;
};

const multiplyThree = (num) => {
  return num * 3;
};

const evaluate = pipe(addFive, substractTwo, multiplyFour, multiplyThree);

console.log(evaluate(5));
