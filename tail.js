const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

function tail(assertEqual) {
  return (assertEqual.splice(1, assertEqual.length - 1));
}


// [1, 2, 3] === [1, 2, 3] // => false
// [1, 2, 3] == [1, 2, 3] // => false


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!