'use strict';
var is_exist_element = function(collection,element){
    return collection.filter((v, idx) => idx % 2 === 0).indexOf(element) !== -1
};
module.exports = is_exist_element;
