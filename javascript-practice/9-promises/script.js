// Promises deep dive in JavaScript

// console.log("start");

// refactored from callback hell to promises chaining
function importantAction(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${userName}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video}`);
    }, 10);
  });
}

function subscribe(channel) {
  const success = true;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(`You have subscribed to: ${channel}`);
      }

      reject(`Haven't you subscribed to: ${channel}`);
    }, 100);
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

//================================
// Promise Combinators - .all, .race,

// .all
// 1. runs all the promises in parallel
// 2. returns a array of all the fulfilled promises
// 3. if one promise fails, fails all the promises and returns the error
// const promiseAll = Promise.all([
//   subscribe("debkanta.dev"),
//   importantAction("Debkanta"),
//   likeTheVideo("JavaScript video on Event Loop."),
// ]);

// console.log(promiseAll, "@promiseAll")
// const results = promiseAll.then(console.log).catch(console.error);

// .race
// 1. returns first promise which gets executed
// const promiseRace = Promise.race([
//   subscribe("debkanta.dev"),
//   importantAction("Debkanta"),
//   likeTheVideo("JavaScript video on Event Loop."),
// ]);

// console.log(promiseRace, "@promiseRace")
// promiseRace.then(console.log).catch(console.error);

// .allSettled
// 1. return an array of objects corresponding to all the promises
// response type: { status: "fulfilled" | "rejected", reason: string, value: string}
// const promiseAllSettled = Promise.allSettled([
//   subscribe("debkanta.dev"),
//   importantAction("Debkanta"),
//   likeTheVideo("JavaScript video on Event Loop."),
// ]);

// console.log(promiseAllSettled, "@promiseAllSettled")
// promiseAllSettled.then(console.log).catch(console.error);

// .any
// 1. works exactly like .race with one key difference is it's race for fulfilled
// 2. if all promises reject - then returns AggregatorError
// const promiseAny = Promise.any([
//   importantAction("Debkanta"),
//   likeTheVideo("JavaScript video on Event Loop."),
//   subscribe("debkanta.dev"),
// ]);

// console.log(promiseAny, "@promiseAny")
// promiseAny.then(console.log).catch(console.error);

// async await
// const tryAsyncAwait = async () => {
//   console.log("Mic testing:: Async Await");
//   console.log("start")

//   try {
//     const message1 = await importantAction("Debkanta");
//     console.log(message1, "@message1");
//     const message2 = await likeTheVideo("JavaScript video on Event Loop.");
//     console.log(message2, "@message2");
//     const message3 = await subscribe("debkanta.dev");
//     console.log(message3, "@message3");
//   } catch (e) {
//     console.error(e);
//   }
// };

// tryAsyncAwait();

// console.log("stop")

// ================================================
// Output based questions:

// console.log("start")

// const promise = new Promise((resolve) => { // this gets executed as normal sync code
//   console.log(1)
//   resolve(2) // if there's no resolve then there's no point of .then (it never gets executed)
//   console.log(3)
// })

// promise
//   .then(console.log)
//   .catch(console.error)

// console.log("end")

// console.log("start")

// const fn = () => new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("success");
// })

// console.log("middle")

// fn().then(console.log)

// console.log("end")
// start, middle, 1, end, success

// const fn = (success) => new Promise((resolve, reject) => {
//   if(success) {
//     resolve("success")
//   }

//   reject("error")
// })

// promise = fn(true)

// promise
//   .then((data) => {
//     console.log(data)

//     return fn(true)
//   })
//   .then((data) => {
//     if(data !== "victory") throw "Defeat"

//     return fn(true)
//   })
//   .then(console.log)
//   .catch((err) => {
//     console.error(err)

//     return fn(false)
//   })
//   .then((data) => {
//     console.log(data)

//     return fn(true)
//   })
//   .catch(err => {
//     console.error(err)

//     return "Error Caught!"
//   })
//   .then((data) => {
//     console.log(data)

//     return new Error("test")
//   })
//   .then((data) => {
//     console.log(`Success:: ${data.message}`)
//   })
//   .catch((err) => {
//     console.error(`Error: ${err.message}`)
//   })

// Promise chaining

// We have to create a promise called firstPromise - which will resolve to a text "first"
// then we have to create another promise called secondPromise, which resolves our firstPromise
// resolve secondPromise, output of which will be passed to firstPromise and then print firstPromise

// const firstPromise = new Promise((resolve) => {
//   resolve("first");
// });

// const secondPromise = new Promise((resolve) => {
//   resolve(firstPromise);
// });

// secondPromise.then((firstPromise) => firstPromise).then(console.log);

// async function loadJson(url) {
//   try {
//     const response = await fetch(url);

//     if (response.status === 200) {
//       return await response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   } catch (err) {
//     throw err;
//   }
// }

// async function main() {
//   const response = await loadJson("https://jsonplaceholder.typicode.com/tsodos");

//   console.log(response);
// }

// main();

// const promRecurse = (promises) => {
//   if (promises.length === 0) return;

//   currentPromise = promises.shift();

//   currentPromise.then(console.log).catch(console.error);

//   promRecurse(promises);
// };

// const promises = [
//   importantAction("Debkanta"),
//   likeTheVideo("JavaScript video on Event Loop."),
//   subscribe("To my channel!"),
// ];

// promRecurse(promises);

// console.log(promises);