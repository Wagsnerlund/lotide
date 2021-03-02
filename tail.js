const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(data) {
  let arr = [];
  for (let i = 1; i < data.length; i++) {
    arr.push(data[i]);
  }
  return arr;
};

assertEqual(tail([7, 6, 5]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");