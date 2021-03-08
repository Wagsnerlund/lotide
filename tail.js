const tail = function(data) {
  let arr = [];
  for (let i = 1; i < data.length; i++) {
    arr.push(data[i]);
  }
  return arr;
};

module.exports = tail;