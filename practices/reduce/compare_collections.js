'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return JSON.stringify(collection_a) === JSON.stringify(collection_b)
}

module.exports = compare_collections;


