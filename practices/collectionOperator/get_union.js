'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let arr = collection_a
  for(let i = 0; i < collection_b.length; i++) {
    if(arr.indexOf(collection_b[i]) === -1) {
      arr.push(collection_b[i])
    }
  }
  return arr
}

module.exports = get_union;

