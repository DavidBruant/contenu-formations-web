'use strict';

var a = require('./a.js');
var b = require('./b.js');
var c = require('./c.js');

// ...

/*module.exports = function(){


}*/

var o = {
    a: 1,
    b: 2
}

module.exports = {
    f1: function(){
        // ...
    },
    f2: function(){
        return o.b;
    }
}