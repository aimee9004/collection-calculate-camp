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
  return clearRepeat(arr)
}
function clearRepeat(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
module.exports = double_to_one;
