const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  for (const property in object1) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    } else if (!object2[property]) {
      return false;
    } else if (object1[property] !== object2[property]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual((eqObjects(ab, ba)), true);
assertEqual((eqObjects(ab, abc)), false);