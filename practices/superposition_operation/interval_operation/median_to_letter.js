'use strict';

function median_to_letter(collection) {
  return getAlphabet(getMiddleNum(collection))
  //在这里写入代码
}

// 获取中位数
function getMiddleNum(arr) {
  let len = arr.length
  let lowMidd = Math.floor((len-1)/2)
  let highMidd = Math.ceil((len-1)/2)
  return Math.ceil((Number(arr[lowMidd]) + Number(arr[highMidd]))/2)
}

// 单个数字映射字母
function getAlphabet(num) {
  let str = ''
  if(num > 0 && num < 26) {
    str = String.fromCharCode(64 + parseInt(num))
  }else {
    while(num > 26) {
      let val = num / 26
      let remainder = num % 26
      if(remainder === 0) {
        remainder = 26
        val--
        str = String.fromCharCode(64 + parseInt(remainder)) + str
      }else {
        str = String.fromCharCode(64 + parseInt(remainder)) + str
      }
      num = val
    }
    str = String.fromCharCode(64 + parseInt(num)) + str
  }
  return str.toLowerCase()
}
module.exports = median_to_letter;
