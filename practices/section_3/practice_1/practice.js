function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return collection_a.filter(v => {
    if(object_b.value.indexOf(v.key) !== -1) {
      v.count--
    }
    return v.count
  })
}

module.exports = create_updated_collection;
