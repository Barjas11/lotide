// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) { 
//     return false;
//   } else
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i])
//       {return false;}  
//     else
//     return true;
//   }
// };

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) { //define two inputs
  if (eqArrays(array1, array2)) {  //then compare
    console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`); // print
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
  }
 }; 
module.exports = assertArraysEqual;

