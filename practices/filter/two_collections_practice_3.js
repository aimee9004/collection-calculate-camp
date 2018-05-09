'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  let arr = []
  // for(let i = 0; i < collection_b.length; i++) {
  //   let sel = collection_a.filter(v => v % collection_b[i] === 0)
  //   arr = arr.concat(sel)
  // }
  for(let i = 0; i < collection_a.length; i++) {
    for(let j = 0; j < collection_b.length; j++) {
      if(collection_a[i] % collection_b[j] === 0) {
        arr.push(collection_a[i])
      }
    }
  }
  return arr
}

module.exports = choose_divisible_integer;
