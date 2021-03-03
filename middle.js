// const eqArrays = function (a, b) {
//   if (a.length === b.length) {
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// };

// const assertArraysEqual = function (arrOne, arrTwo) {
//   if (eqArrays(arrOne, arrTwo)) {
//     console.log(`✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${arrOne} !== ${arrTwo}`);
//   }
// };

const middle = function (data) {
  const mid = ([data.length - 1]) / 2;
  console.log(mid)
  let arr = [];
    if ((data.length) % 2 === 1) {
      arr = arr.push(mid);
      console.log(mid);
  }
  return arr;
};
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
// assertArraysEqual(middle[1, 2, 3, 4, 5, 6, 7]);