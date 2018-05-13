'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arr = collection.split('->').sort(sortNumber)
  let len = arr.length
  let lowNum = Math.floor((len-1)/2)
  let highNum = Math.ceil((len-1)/2)
  return (Number(arr[lowNum]) + Number(arr[highNum]))/2
}
function sortNumber(a, b) {
  return a - b
}

module.exports = compute_chain_median;
