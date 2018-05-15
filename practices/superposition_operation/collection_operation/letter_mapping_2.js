'use strict';

function average_to_letter(collection) {
  let avg = collection.reduce((acc, cur) => {
    return acc + cur
  })
  return getAlphabet(Math.ceil(avg/collection.length))
  //在这里写入代码
}

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

module.exports = average_to_letter;

