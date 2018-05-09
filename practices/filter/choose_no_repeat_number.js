'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  let arr = []
  for(let i = 0; i < collection.length; i++) {
    if(arr.indexOf(collection[i]) === -1) {
      arr.push(collection[i])
    }
  }
  return arr
}

module.exports = choose_no_repeat_number;
