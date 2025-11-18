// Prototype Chaining
const person = {
    // name: "Piyush",
    // age: 27,
}

// console.log(person.alias()) // error:: person.alias is not a function

const superPerson = {
    name: "Debkanta",
    age: 25,
    alias: function () {
        return `This is a __proto__ for person by ${this.name}, aged ${this.age}`
    }
}

person.__proto__ = superPerson;

// console.log(person.alias())


// Prototype Inheritance
function Animal(name, age) {
    this.name = name;
    this.age = age
}

Animal.prototype.sayName = function () {
    console.log("My name is " + this.name + ". My age is "+ this.age + ".")
}

// const animal = new Animal("Debkanta")

function Dog(name, age, breed) {
    Animal.apply(this, [name, age]);

    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog("Hugo", 5, "German Shephard")

dog.sayName()