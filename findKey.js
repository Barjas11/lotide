const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


const obji = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const findKey = function(objects, callBack) {
  for (let key in objects) {
    if (callBack(objects[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;



console.log(findKey(obji, x => x.stars === 2)); // => "noma"
