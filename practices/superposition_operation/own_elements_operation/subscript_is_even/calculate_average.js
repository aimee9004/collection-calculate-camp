'use strict';
var calculate_average = function(collection){
    let arr =  collection.filter((v, index) => index % 2 !== 0)
    return arr.reduce((acc, cur) => { return acc+cur}, 0)/arr.length 
};
module.exports = calculate_average;
