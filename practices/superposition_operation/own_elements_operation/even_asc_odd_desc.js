'use strict';
var even_asc_odd_desc = function(collection){
    let evenArr = collection.sort(stob).filter(v => v % 2 === 0)
    let oddArr = collection.sort(btos).filter(v => v % 2 !== 0)
    return evenArr.concat(oddArr)
};
function stob(a, b) {
    return a - b
}
function btos(a, b) {
    return b - a
}
module.exports = even_asc_odd_desc;
