
// Question 3: Output?
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // a["object Object"]
a[c] = 456; // a["object Object"]

console.log(a[b]);

// Question 6: Output?
console.log([..."Lydia"])

// Question 7: Output?
const settings = {
    username: "Piyush",
    level: 19,
    health: 90
};

const data = JSON.stringify(settings, ["level", "health"]) // the second parameter works as replacer
console.log(data);

// Question 8: Output?
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius, // here this refer to where it's being called from
};

console.log(shape.diameter());
console.log(shape.perimeter());


// Question 9: Output?
let person = {
    name: "John"
}
const arr = [person]

person = null

console.log(arr[0])

// Question 10: Output?
const value = {
    number: 10
}

const multiply = (x = {...value}) => {
    return x.number *= 2;
}

console.log(multiply()) // 20
console.log(multiply()) // 20
console.log(multiply(value)) // 20
console.log(multiply(value)) // 40 -> because the above one modified the actual ref of the obj(value) ref

// Question 11: Output?
function changeAgeAndRef(person) {
    person.age = 25;
    person = {
        name: "John",
        age: 50
    }

    return person
}

const person1 = {
    name: "Alex",
    age: 30,
}

const person2 = changeAgeAndRef(person1);

console.log("changeAgeAndRef")
console.log(person1)
console.log(person2)

// Question 12: Output?
const user = {
    name: {
        first: "Roadside",
        last: "Coder"
    },
    age: 25
}

// const user1 = Object.assign({}, user)
// const user1 = {...user}
const user1 = JSON.parse(JSON.stringify(user))

user1.name.first = "Debkanta"
console.log("Shallow/Deep")
console.log(user)
console.log(user1)



