const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function (array, callback) {
  arr = [];
  for (const element of array) {
    if (element < 0) {
      break;
    }
    arr.push(element);
  }
  return arr;
};

const results = takeUntil(data, x => x < 0);

const eqArrays = function (a, b) {
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

const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`❌ Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

assertArraysEqual(results, [1, 2, 5, 7, 2]);