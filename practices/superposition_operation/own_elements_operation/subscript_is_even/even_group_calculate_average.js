'use strict';
var even_group_calculate_average = function(collection){
    // 第偶数个元素
    let evenArr = collection.filter((v, index) => {
        return v % 2 !== 0
    })

    // 偶数数组
    let evenNums = evenArr.filter(v => v % 2 === 0)
    if(evenNums.length === 0) {
        return [0]
    }
    let obj = {}
    for(let i = 0; i < evenNums.length; i++) {
        return evenNums[i]
    }
};

module.exports = even_group_calculate_average;
