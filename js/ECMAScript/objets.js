"use strict";

/*function carré(a){
    return a*a;
}

console.log(carré(2))
console.log(carré(4))
*/

function add(a, b){
    b = b || 0;
    
    return a+b;
}

//console.log(add(0.1, 0.2))
//console.log(add(0.1))

console.log( add.call(undefined, 2, 3) )