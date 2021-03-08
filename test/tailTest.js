const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([7, 6, 5]), [6, 5]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });
});