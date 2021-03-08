const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]); 
  });
});