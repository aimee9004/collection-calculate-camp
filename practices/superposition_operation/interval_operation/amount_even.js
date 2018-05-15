'use strict';

function amount_even(collection) {
  let arr = collection.filter(v => v % 2 === 0)
  return arr.reduce((acc, cur) => {
    return acc + cur
  }, 0)
  //在这里写入代码
}

module.exports = amount_even;
