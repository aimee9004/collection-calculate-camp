'use strict';

function compute_median(collection) {
  //在这里写入代码
  let arr = collection.sort(sortNum)
  return getMiddle(arr)
}
function sortNum(a, b) {
  return a - b
}
function getMiddle(arr) {
  let len = arr.length
  let lowMiddle = Math.floor((len-1)/2)
  let highMiddle = Math.ceil((len-1)/2)
  return (Number(arr[lowMiddle]) + Number(arr[highMiddle]))/2
}

module.exports = compute_median;


