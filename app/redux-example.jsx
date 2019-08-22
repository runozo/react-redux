var redux = require('redux');

console.log('Starting redux example');

// Pure function
function add (a, b) {
    return a + b;
}

// Inpure functions
var a = 3;
function add0(b) {
    return a + b;
}

var result;
function add1(a, b) {
    result = a + b;
    return result;
}

function add2(a, b) {
    return a + b + new Date().getSeconds();
}

function changeprop(obj) {
    return {
        ...obj,
        name: 'Jen'
    }
}
var startingValue = {
    name: 'Andrew',
    age: 25
}
var res = changeprop(startingValue);

console.log(startingValue);
console.log(res);