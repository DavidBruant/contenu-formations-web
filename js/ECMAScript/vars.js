(function(global){
    'use strict';
    
    var a = 1;
    
    document.addEventListener('click', function(){
        console.log('inc');
        a++;
    });

    global.lol = function(){
        return a;
    }
    
})(this);

console.log(lol());

var glob = this;

setTimeout(function(){
    var lol1 = lol;
    
    console.log(lol());
    init(glob);
    console.log(lol());
    
    console.log(lol1 !== lol);
}, 2000)

// IIFE : Immediately Invoked Function Expression

var a = 1;

this.a 

var yo = lol;
yo;

function s(a, b){
    if(b === undefined)
        b = 12;
    return a+b;
}

s(12, 43);
s(21);
s(21, undefined);









