'use strict';

function compute_average(collection) {
  //在这里写入代码
  let sum = 0
  return collection.reduce((a, b) => {
    return a + b
  })/collection.length
}

module.exports = compute_average;

