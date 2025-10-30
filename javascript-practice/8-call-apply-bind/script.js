// call, apply and bind

// const obj = { name: "Debkanta"};

// function sayHello(age, profession) {
//     return "Hello, I'm " + this.name + " of "+ age+" years old. And I'm a "+profession+".";
// }

// console.log(sayHello.call(obj, "25", "Software Engineer"));
// console.log(sayHello.apply(obj, ["25", "Software Engineer"]));

// const returnFn = sayHello.bind(obj, "25", "Software Engineer");

// console.log(returnFn())

// const age = 10;

// const person = {
//     name: "Piyush",
//     age: 20,
//     getAge() {
//         return this.age
//     }
// }

// const personTwo = { age: 24 }

// console.log(person.getAge.call(personTwo))


// var status = "yay!"

// setTimeout(() => {
//     const status = "woah!"

//     const data = {
//         status: "yo!",
//         getStatus() {
//             return this.status
//         }
//     }

//     console.log(data.getStatus()) // yo!
//     console.log(data.getStatus.call(this)) // yay!
// }, 0)

// const animals = [
//     {species: "Lion", name: "King"},
//     {species: "Whale", name: "Queen"}
// ]

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + ": " + this.name);
//     };

//     this.print();
// }

// for(let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i], i);
// }

// append an array to another array
// const array = ["a", "b"]
// const elements = [0, 1, 2]

// array.push.apply(array, elements) // push takes multiple arguments and apply passes them as an array
// array.push.call(array, ...elements) // push takes multiple arguments and call passes them as individual arguments

// console.log(array, "@array")

// find min/max number in an array
// const numbers = [5, 6, 2, 3, 7];

// console.log(Math.max.apply(null, numbers))
// console.log(Math.min.apply(null, numbers))


// function print(...str) {
//     console.log(...str)
// }

// print.call(null, "Hello, world!")

// function f() {
//     console.log(this.name)
// }

// f = f.bind({ name: "John" }).bind({ name: "Ann" }) // once a function is binded - it cannot be binded again

// f();

// function checkPassword(success, failed) {
//     let password = prompt("Password?", "");

//     if(password === "debkanta") success()
//         else failed()
// }

// const user = {
//     name: "Debkanta Mitra",
//     loginSuccessful() {
//         console.log(`${this.name} logged in`);
//     },
//     loginFailed() {
//         console.log(`${this.name} failed to log in`)
//     }
// }

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user))


// function checkPassword(success, failed) {
//     let password = prompt("Password?", "");

//     if(password === "debkanta") success()
//         else failed()
// }

// const user = {
//     name: "Debkanta Mitra",
//     login(result) {
//         console.log(`${this.name} ${result ? "login successful" : "login failed"}`);
//     },
// }

// checkPassword(user.login.bind(user, true), user.login.bind(user, false))



const obj = {
    name: "Debkanta",
    getName() {
        const name = "Hello"
        console.log(this.name)

        function getName() {
            console.log(this.name)
        }

        getName()
    }
}

obj.getName()