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


// Effet de bord

// Manipule seulement ses arguments, constantes et
// autres fonctions sans effet de bord
function f(a, b){
    return 2*(a+b);
}

f(12, 65) === f(12, 65)

// effet de bord
var compteur = 0;

function g(a, b){
    compteur++
    return a+b+compteur;
} 

g(1, 2) !== g(1, 2)

// autre effet de bord (objet)
var o = {a: 1};

function h(x, o){
    o.a++;
    return x + o.a; 
}

h(1, o) !== h(1, o)

// DOM
function createTweetOl(tweet) {
	var ol = document.createElement('ol');

    // ICI
	var el = document.querySelector('div');
	el.appendChild(ol);

	var li = createTweetLi(tweet);
	ol.appendChild(li);

	return ol;
}

// var t = {};
// createTweetOl(t) ne donne pas le même effet deux fois 
