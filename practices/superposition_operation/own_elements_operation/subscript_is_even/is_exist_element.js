'use strict';
var is_exist_element = function(collection,element){
    let arr = collection.reduce((acc, cur, index) => {
        if(index % 2 === 0) {
            acc.push(cur)
        }
        return acc
    }, [])
    return arr.indexOf(element) !== -1
};
module.exports = is_exist_element;
