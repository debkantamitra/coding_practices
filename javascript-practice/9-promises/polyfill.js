// function PromisePolyFill(executor) {
//     let onResolve, onReject, isFullfilled, isRejected, called, value;

//     function resolve(value) {
//         isFullfilled = true;

//         setTimeout(() => onResolve(value))
//     }

//     function reject(value) {
//         isRejected = true;

//         setTimeout(() => onReject(value))
//     }

//     this.then = function(callback) {
//         onResolve = callback;

//         return this;
//     }

//     this.catch = function(callback) {
//         onReject = callback;

//         return this
//     }

//     executor(resolve, reject)
// }

// const examplePromise = new PromisePolyFill((resolve, reject) => {
//         reject(2);
// })

// console.log(examplePromise)

// examplePromise.then(console.log).catch(console.error)

// console.log("end")



class CustomPromise {   
    constructor(executor) {
        this.resolve = this.#_resolve.bind(this)
        this.reject = this.#_reject.bind(this)

        executor(this.resolve, this.reject)
    }

    #_resolve() {
        console.log("this", this)
    }

    #_reject() {
      
    }
}

function init() {
    return new CustomPromise((resolve) => resolve(10))
}

init()

