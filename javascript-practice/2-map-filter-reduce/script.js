// map, filter and reduce 

const exampleArr = [1, 2, 3, 4];

// Polyfill for map()
// function map(arr, cb) {
//     const result = [];

//     for(let i = 0; i < arr.length; i++) {
//        const resultItem = cb(arr[i], i, arr);

//        result.push(resultItem);
//     }

//     return result;
// }

Array.prototype.myMap = function (cb) {
    const result = [];

    for(let i = 0; i < this.length; i++) {
       const resultItem = cb(this[i], i, this);

       result.push(resultItem);
    }

    return result;
}

const mapResult = exampleArr.myMap((item, index) => {
    return item + index
})  

console.log(mapResult, "mapResult")

// Polyfill for filter()
function filter(arr, cb) {
    const filteredArr = [];

    for(let i = 0; i < arr.length; i++) {
        const isTrue = cb(arr[i], i, arr);
        console.log(isTrue, "isTrue")

        if(isTrue) {
            filteredArr.push(arr[i])
        }
     }
 
     return filteredArr
}

const filterResult = filter(exampleArr, (item) => {
    return item % 2 === 0
})

console.log(filterResult, "filterResult")

// Polyfill for reduce
function reduce(arr, cb, initialValue) {
    let result = initialValue ?? arr[0]; // when no initalValue provided, reduce take first element of the arr as init

    for(let i = 0; i < arr.length; i++) {
        result = cb(result, arr[i], i, arr)
    }

    return result
}

const reducedSum = reduce(exampleArr, (acc, item) => acc + item, 0)

console.log(reducedSum, "reducedSum")


Array.prototype.myPush = function(...args) {
    this.push(...args)
}

