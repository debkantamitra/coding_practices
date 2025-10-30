// Polyfill for .call
Function.prototype.myCall = function(latestContext = {}, ...args) {
    if(typeof this !== "function") {
        throw new Error(this + " isn't Callable");
    }

    latestContext.fn = this;
    return latestContext.fn(...args);
}

// Polyfill for .apply
Function.prototype.myApply = function(latestContext = {}, argsArray) {
    if(!Array.isArray(argsArray)) {
        throw new Error("Pass a valid Array")
    }

    if(typeof this !== "function") {
        throw new Error(this + " isn't Callable");
    }

    latestContext.fn = this;
    return latestContext.fn(...argsArray);
}

// Polyfill for .bind
Function.prototype.myBind = function(latestContext, ...parentArgs) {
    if(typeof this !== "function") {
        throw new Error(this + " isn't Callable");
    }

    latestContext.fn = this;

    return (...childArgs) => {
        const args = [...(parentArgs ?? []), ...(childArgs ?? [])];

        return latestContext.fn(...args);
    }
}

const object = {
    name: "Debkanta"
}

function greet(petName) {
    console.log(`Hello, ${this.name}. Your pet name is ${petName}.`)
}

const bindFn = greet.myBind(object, "humbo")

bindFn("Mimbo")