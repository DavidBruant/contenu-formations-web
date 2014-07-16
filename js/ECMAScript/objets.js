"use strict";

var o = {
    a: 1,
    b: "yo",
    c: {
        c1: 2,
        c3: function(){}
    }
};

o.d = 5;
o.a = false;

console.log(o.e); // undefined

o.c = undefined;

console.log(o.hasOwnProperty('c'), 'c' in o) // true, true

delete o.c;

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




