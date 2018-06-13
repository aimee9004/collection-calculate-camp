'use strict';
var even_group_calculate_average = function(collection){
    let sortArr = collection.filter((crr, idx) => idx % 2 !== 0 && crr % 2 === 0).sort((a, b) => a - b)
    
    let everySum = 0, everyNum = 0, needArr = [];
    if(sortArr.length === 0) {
        return [0]
    }else {
        return sortArr.reduce((acc, cur, idx, arr) => {
            everyNum++
            everySum += cur
            if(idx < sortArr.length && (String(arr[idx]).length != String(arr[idx+1]).length)) {    
                needArr.push(everySum/everyNum)
                everyNum = 0
                everySum = 0
            }
            return needArr
        }, [])
    }
};

module.exports = even_group_calculate_average;
