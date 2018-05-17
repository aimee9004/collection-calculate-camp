'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let arr = collection.sort(sToB)
  // let newArr = []
  // for(let i = 0; i < arr.length-arr.length%3; i++) {
  //   newArr.push(i)
  // }
  // return newArr
}
function sToB(a, b) {
  return a - b
}
module.exports = rank_by_two_large_one_small;
