function count_same_elements(collection) {
  //在这里写入代码
  let temArr = []
  let arr = []
  let obj = {}
  for(let i = 0; i < collection.length; i++) {
    if(temArr.indexOf(collection[i]) === -1) {
      temArr.push(collection[i])
      obj[collection[i]] = 1
    }else {
      obj[collection[i]]++
    }
  }
  for(let i in obj) {
    let iArr = i.split('-')
    if(iArr.length > 1) {
      arr.push({key: iArr[0], count: +iArr[1]})  
    }else {
      arr.push({key: i, count: obj[i]})
    }
  }
  return arr
}

module.exports = count_same_elements;
