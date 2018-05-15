'use strict';

function hybrid_operation_to_uneven(collection) {
  let arr = collection.filter(v => v % 2 !== 0)
  return arr.reduce((acc, cur) => {
    return acc + (cur * 3 + 5)
  }, 0)
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

