"use strict";

/*function carré(a){
    return a*a;
}

console.log(carré(2))
console.log(carré(4))
*/

function add(a, b, c){
    b = b || 0;
    c = c || 0;
    
    return a+b+c;
}

//console.log(add(0.1, 0.2))
//console.log(add(0.1))

console.log( add.call(
    undefined, 
    2, 
    3,
    7
) )
console.log( add.apply(
    undefined, 
    [2, 3, 7]
) )

var arr = [87, 45, 558, 9743, 4678, 35];

console.log('max', Math.max(1, 76, 8))
console.log('max apply ', Math.max.apply(undefined, arr))
