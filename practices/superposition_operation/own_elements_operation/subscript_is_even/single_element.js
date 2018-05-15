'use strict';
var single_element = function(collection){
    let arr = collection.reduce((acc, cur, index) => {
        if(index % 2 !== 0) {
            acc.push(cur)
        }
        return acc
    }, [])
    let newArr = arr.reduce((acc, cur) => {
        let obj = {}
        if(arr.indexOf(cur) !== -1) {
            obj[cur]++
        }
        if(obj[cur] === 1) {
            acc.push(cur)
        }
        return acc
    }, [])
    return newArr
};
module.exports = single_element;
