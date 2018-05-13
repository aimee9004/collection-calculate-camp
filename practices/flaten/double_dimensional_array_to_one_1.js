'use strict';

function double_to_one(collection) {
  //在这里写入代码
  let arr = []
  for(let i = 0; i < collection.length; i++) {
    if(collection[i].length > 0) {
      for(let j = 0; j < collection[i].length; j++) {
        arr.push(collection[i][j])
      }
    }else {
      arr.push(collection[i])
    }
  }
  return arr
}

module.exports = double_to_one;
