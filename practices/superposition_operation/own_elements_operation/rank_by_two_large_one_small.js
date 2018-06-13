'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码       1 2 3 4 6 8 9 10 
  //                2 3 1 6 8 4 9 10
  let arr = collection.sort((a, b) => a - b)
  let newArr = []
  for(let i = 0; i < Math.floor(arr.length/3); i++) {
    newArr = arr.splice(i*3, 1)
    arr.splice((i+1)*3-1, 0, newArr[0])
  }
  return arr
}
module.exports = rank_by_two_large_one_small;
