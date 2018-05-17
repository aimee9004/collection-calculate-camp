'use strict';
var single_element = function(collection){
    let arr = collection.filter((v, index) => index % 2 !== 0)

    let obj = {}, temArr = []
    for(let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]) {
            obj[arr[i]][1]++
        }else {
            obj[arr[i]] = [i,1]
        }
    }
    // obj =  { 2 : [ 0, 2 ], 5 : [ 4, 1 ], 6 : [ 2, 1 ], 43 : [ 3, 1 ] }
    for(let i in obj) {        
        if(obj[i][1] === 1) {
            temArr[obj[i][0]] = +i
        }
    }
    // temArr = [ undefined, undefined, 6, 43, 5 ]
    return temArr.filter(v => !!v)
};

module.exports = single_element;
