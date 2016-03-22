'use strict';

var c = 45;

// IIFE : Immediately Invoked Function Expression
(function(global){
    // 'use strict';
    
    var a = 1;
    
    document.addEventListener('click', function(){
        console.log('inc', a);
        a++;
    });

    // window.lol
    global.lol = function(){
        return a;
    }
    
})(this); // this === window

setInterval(function(){
    console.log('lol', window.lol());
}, 1000)

// équivalent à
function yo(){
    // corps
}
yo();


function yo1(){
    'NOT strict mode';
    this; // window (global object)
}
function yo2(){
    'strict mode';
    this; // undefined
}



console.log(lol());

var glob = this;

setTimeout(function(){
    var lol1 = lol;
    
    console.log(lol());
    init(glob);
    console.log(lol());
    
    console.log(lol1 !== lol);
}, 2000)



var a = 1;

this.a 

var yo = lol;
yo;



function s(a, b){
    if(b === undefined)
        b = 12;
    return a+b;
}

console.log(s(12, 43));
console.log(s(21));
console.log(s(21, undefined));






(function(global){
    'use strict';
    c = 0; // error
    
    document.addEventListener('click', function(){
        console.log('inc');
        c++;
    });

    global.lol = function(){
        return c;
    }
    
})(this);




