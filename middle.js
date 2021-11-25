// FUNCTION IMPLEMENTATION
const eqArrays = function(array1,array2) {
  let evaluate = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      evaluate = true;
    } else if (array1[i] !== array2[i]) {
      evaluate = false;
    }
  }
  console.log(evaluate);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(array1,array2) {
  let evaluate = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      evaluate = true;
    } else if (array1[i] !== array2[i]) {
      evaluate = false;
    }
  }
  if (evaluate) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else if (evaluate !== true) {
    console.log(`Assertion Failed: ${array1}!== ${array2}`);
  }
};


const middle = function(array) {
  let result = [];
  if (array.length < 3) {
    return result;
  } else if (array.length % 2 === 1) {
    result.push(array[(array.length - 1) / 2]);
  } else if (array.length % 2 === 0) {
    result.push(array[(array.length / 2) - 1]);
    result.push(array[(array.length / 2)]);
  }
  console.log(result);
};