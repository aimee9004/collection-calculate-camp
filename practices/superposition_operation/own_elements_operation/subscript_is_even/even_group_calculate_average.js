'use strict';
var even_group_calculate_average = function(collection){
    let sortArr = collection.filter((crr, idx) => idx % 2 !== 0 && crr % 2 === 0).sort((a, b) => a - b)
    
    let everyNum = 0, needArr = [];
    if(sortArr.length === 0) {
        return [0]
    }else {
        return sortArr.reduce((acc, cur, idx, arr) => {
            everyNum++
            acc = acc + cur
            if(idx < sortArr.length-1 && (String(arr[idx]).length != String(arr[idx+1]).length)) {    
                needArr.push((acc + cur)/everyNum)
                everyNum = 0
            }
            return needArr
        }, [])
    }
};

module.exports = even_group_calculate_average;
