const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

function countLetters (str) {
  var newStr = str.split(' ').join('').toLowerCase();
  console.log(newStr);
  var newObj = {};

  for (var i = 0; i < newStr.length; i++){
    var number = 0;
    if(newObj[newStr[i]]) {
      newObj[newStr[i]] += 1;
    } else {
      newObj[newStr[i]] = 1;
    }
  }
  return newObj;
}

console.log(countLetters("Lighthouse In the house"));