function count_same_elements(collection) {
  //在这里写入代码
  let temArr = []
  let arr = []
  let obj = {}
  for(let i = 0; i < collection.length; i++) {
    let iArr = []
    if(collection[i].indexOf('-') !== -1) {
      iArr = collection[i].split('-')
    }else if(collection[i].indexOf(':') !== -1) {
      iArr = collection[i].split(':')
    }
    if(collection[i].indexOf('[') !== -1) {
      let numIdxStart = collection[i].indexOf('[') + 1
      let numIdxEnd = collection[i].indexOf(']')
      let element = collection[i].split('[')[0]
      if(temArr.indexOf(element) === -1) {
        temArr.push(element)
        obj[element] = +(collection[i].slice(numIdxStart, numIdxEnd))
      }else {
        obj[element] += +(collection[i].slice(numIdxStart, numIdxEnd))
      }
    }else if(iArr.length > 1) {
      if(temArr.indexOf(iArr[0]) === -1) {
        temArr.push(iArr[0])
        obj[iArr[0]] = +iArr[1]
      }else {
        obj[iArr[0]] += +iArr[1]
      }
    }else {
      if(temArr.indexOf(collection[i]) === -1 ) {
        temArr.push(collection[i])
        obj[collection[i]] = 1
      }else {
        obj[collection[i]]++
      }
    }
  }

  for(let i in obj) {
    arr.push({name: i, summary: obj[i]})
  }
  return arr
}

module.exports = count_same_elements;
