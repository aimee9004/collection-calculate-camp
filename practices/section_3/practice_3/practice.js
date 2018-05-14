function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let allArr = getObj(collection_a)
  return allArr.filter(v => {
    if(object_b.value.indexOf(v.key) !== -1) {
      v.count -= parseInt(v.count / 3)
    }
    return v.count
  })
}
function getObj(getArr) {
  let temArr = []
  let arr = []
  let obj = {}
  for(let i = 0; i < getArr.length; i++) {
    if(temArr.indexOf(getArr[i]) === -1) {
      temArr.push(getArr[i])
      obj[getArr[i]] = 1
    }else {
      obj[getArr[i]]++
    }
  }
  for(let i in obj) {
    arr.push({key: i, count: obj[i]})
  }
  return arr
}

module.exports = create_updated_collection;
