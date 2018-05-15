'use strict';
var calculate_median = function(collection){
    return getMiddleNum(getEvenArr(collection))
};
// 获取第偶数个元素数组
function getEvenArr(arr) {
    return arr.reduce((acc, cur, index) => {
        if((index+1) % 2 === 0) {
            acc.push(cur)
        }
        return acc
    }, [])
} 
// 获取中位数
function getMiddleNum(arr) {
    let len = arr.length
    let lowMidd = Math.floor((len-1)/2)
    let highMidd = Math.ceil((len-1)/2)
    return (Number(arr[lowMidd])+Number(arr[highMidd]))/2
}
module.exports = calculate_median;
