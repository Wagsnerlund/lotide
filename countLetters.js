const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allLetters, lettersToCount) {
  const results = {};
  for (const letter of allLetters) {
    if (lettersToCount[letter]) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
}

const Letters = ["LHL"];

const result1 = countLetters("LHL", { H: true, L: true});

assertEqual(result1["H"], 1);
assertEqual(result1["L"], 2);