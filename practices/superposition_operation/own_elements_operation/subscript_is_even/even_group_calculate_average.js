'use strict';
var even_group_calculate_average = function(collection){
    // 第偶数个元素
    let evenArr = collection.reduce((acc, cur, index) => {
        if(index % 2 !==0) {
            acc.push(cur)
        }
        return acc
    }, []) 

    // 偶数数组
    let evenNums = evenArr.filter(v => v % 2 === 0)
    if(evenNums.length === 0) {
        return [0]
    }
    // for(let i = 0; i < evenArr.length; i++) {

    // }
};

module.exports = even_group_calculate_average;
