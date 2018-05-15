'use strict';
var even_group_calculate_average = function(collection){
    let arr = collection.reduce((acc, cur, index) => {
        if(index % 2 !==0) {
            acc.push(cur)
        }
        return acc
    }) 
};

module.exports = even_group_calculate_average;
