'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  // 方法一
  return Math.max(...collection)
  // 方法二
  // return Math.max.apply(Math, collection)

  // 方法三 
  // let max = collection[0];
  // for(let i = 0; i < collection.length; i++) {
  //   if(max < collection[i]) {
  //     max = collection[i]
  //   }
  // }
  // return max
}

module.exports = collect_max_number;
