'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let arr = []
  if(number_a < number_b) {
    for(let i = number_a; i <= number_b; i++) {
      arr.push(getAlphabet(i))
    }
  }else {
    for(let i = number_a; i >= number_b; i--) {
      arr.push(getAlphabet(i))
    }
  }
  return arr
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

module.exports = get_letter_interval_2;

