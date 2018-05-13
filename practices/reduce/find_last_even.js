'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for(let i = collection.length; i > 0; i--) {
    if(collection[i] % 2 === 0) {
      return collection[i]
    }
  }
  // return collection.find(v => {

  // })
}
function isLastEven() {

}

module.exports = find_last_even;
