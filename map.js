const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);

const eqArrays = function(a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`❌ Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);