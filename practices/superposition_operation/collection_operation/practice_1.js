'use strict';

function hybrid_operation(collection) {
  return collection.reduce((acc, cur) => {
    return acc + (cur * 3 + 2)
  }, 0)

  //在这里写入代码
}

module.exports = hybrid_operation;

