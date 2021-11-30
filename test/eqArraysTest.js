const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// test case

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// test case
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);