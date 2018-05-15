'use strict';

function average_uneven(collection) {
  let arr = collection.filter(v => v % 2 !== 0)
  let sum = arr.reduce((acc, cur) => {
    return acc + cur
  }, 0)
  return sum / arr.length
  //在这里写入代码
}

module.exports = average_uneven;
