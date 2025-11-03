// Promises deep dive in JavaScript

// console.log("start");

// refactored from callback hell to promises chaining
function importantAction(userName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Subscribe to ${userName}`);
    }, 2000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Like the ${video}`);
    }, 1000);
  });
}

function subscribe(channel) {
  const success = false;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(`You have subscribed to: ${channel}`);
      }

      reject(`Haven't you subscribed to: ${channel}`);
    }, 0);
  });
}

// importantAction("Debkanta")
//             .then(result => {
//                 console.log(result)
//                 return likeTheVideo("JavaScript video on Event Loop.")
//             })
//             .then(console.log)
// console.log("stop")

// console.log("start");

// const subscribe = new Promise((resolve, reject) => {
//     const result = true;

//     if(result) resolve("Subscribe to Debkanta")

//     reject(new Error("Why didn't you subscribe to Debkanta?"))
// })

// console.log(subscribe)

// subscribe
//         .then((result) => result)
//         .then(console.log)

// const directResolve = Promise.resolve("This is direct resolve. Async operation only!")

// console.log(directResolve)

// directResolve.then((result) => console.log(result))

// console.log("stop")

// Promise Combinators - .all, .race,

// .all
// 1. runs all the promises in parallel
// 2. returns a array of all the fulfilled promises
// 3. if one promise fails, fails all the promises and returns the error
const promiseAll = Promise.all([
  subscribe("debkanta.dev"),
  importantAction("Debkanta"),
  likeTheVideo("JavaScript video on Event Loop."),
]);

const results = promiseAll.then(console.log).catch(console.log);

// .race
// 1. returns first promise which succeeds or fails
