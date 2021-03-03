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

const without = function (source, itemsToRemove) {
  newArr = [];
  for (let i = 0; i < source.length; i++) {
    let fnd = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        fnd = true;
        break;
      }
    }
    if (fnd === false) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};


console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), [5, 6, 5]));