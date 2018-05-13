function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(v => {
    return collection_b.indexOf(v) !== -1
  })
}

module.exports = collect_same_elements;
