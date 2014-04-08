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

delete o.c;

// o is like {a:false, b:"yo", d:5}
// Could do the same with o as a function