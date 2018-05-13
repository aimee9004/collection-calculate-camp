function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let filterArr = collection_a.filter(v => object_b.value.indexOf(v.key) !== -1)
  let arr = []
  for(let i = 0; i < filterArr.length; i++) {
    arr.push(filterArr[i].key)
  }
  return arr
}

module.exports = collect_same_elements;
