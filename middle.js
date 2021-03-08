const middle = function (data) {
  const mid = data[Math.floor((data.length - 1) / 2)];
  let arr = [];
  if ((data.length) % 2 === 1) {
    arr.push(mid);
  } else {
    arr[0] = data[(data.length / 2) - 1];
    arr[1] = data[data.length / 2];
  }
  return arr;
};

module.exports = middle;