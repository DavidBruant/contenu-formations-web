"use strict";

var o = {
    a: 1,
    b: "yo",
    c: {
        patate: 2,
        c3: function(){}
    }
};

console.log(o.a);

o.d = 5;
o.a = false;
// o["a"] <===> o.a;
Number.isNaN
//o[o.b] => o["yo"]

console.log(o.e); // undefined

o.c.patate;

var bla = o.c;

console.log(o, o.c, bla, bla.patate)

// Liste des propriété de l'objet
var props = Object.keys(o);
// ['a', 'b', 'c', 'd']


o.c = undefined;
//o.c === undefined

console.log(o.hasOwnProperty('c'), 'c' in o) // true, true

delete o.c;
//o.c === undefined

console.log(o.hasOwnProperty('c'), 'c' in o) // false, false


// o is like {a:false, b:"yo", d:5}
// Could do the same with o as a function

var o2 = {
    a: 25,
    
    get r(){
        return this.a + Math.random();
    },
    set r(v){
        this.a = v;
    }
};



console.log(Object.getOwnPropertyDescriptor(o2, a));


var DEFAULT_CONFIG = {
    host: 'localhost',
    port: 80
};


var conf1 = Object.create(DEFAULT_CONFIG);
conf1.host = 'google.com';

var conf2 = Object.create(DEFAULT_CONFIG);



// arrays

'use strict';

var arr = [12, 65, 546, true, "la vie d'adèle", {}, [], function(){}];

arr[0] = 12;
arr[1] = 65;
arr[2] = 546;

console.log( arr[0], arr["0"] );

ObjectViz(arr);
