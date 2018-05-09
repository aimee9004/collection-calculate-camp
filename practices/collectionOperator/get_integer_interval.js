'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let arr = []
  if(number_a < number_b) {
    for(let i = number_a; i <= number_b; i++) {
      arr.push(i)
    }
  }else {
    for(let i = number_a; i >= number_b; i--) {
      arr.push(i)
    }
  }
  return arr
}

module.exports = get_integer_interval;

