const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`Comparison Failed: ${arr1} ❌❌❌ ${arr2}`)
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Comparison Failed: ${arr1} ❌❌❌ ${arr2}`)
      return false;
    }
  }

  console.log(`Comparison Passed: ${arr1} ✅✅✅ ${arr2}`)
  return true;
  
};

const without = function(orgArray, rmvArray) {
  let newArray = orgArray;
  for (let i = 0; i < rmvArray.length; i++) {
    while (newArray.includes(rmvArray[i])) {
      let itemsToRemove = newArray.indexOf(rmvArray[i]);
      newArray.splice(itemsToRemove, 1);
    }
  };
  return newArray;
};
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]