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

const letterPositions = function (sentence) {
  const results = {};
  for (let j = 0; j < sentence.length; j++) {
    if (results[sentence[j]]) {
      results[sentence[j]].push(j);
    } else {
      results[sentence[j]] = [j];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);