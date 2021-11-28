
const assertArrayEqual = function(array1, array2) { //define two inputs
  if (eqArrays(array1, array2)) {  //then compare
    console.log(`🟢🟢🟢 Assertion Passed: [actual] === [expected]`); // print
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [actual] !== [expected]`);
  }
 }; 

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;

// test case
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// assertArraysEqual(results2 , [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
// assertArraysEqual(results1 , [ 1, 2, 5, 99, 2 ]);