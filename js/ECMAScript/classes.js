"use strict";

// pattern 1
function Car(color){
    // JS engine initializes |this| to Object.create(Car.prototype)
    this.color = color;
    this.leftFrontWheel  = new Wheel();
    this.rightFrontWheel = new Wheel();
    this.leftRearWheel   = new Wheel();
    this.rightRearWheel  = new Wheel();
    // JS engine returns |this| (if the return value isn't an object)
}

Car.prototype = {
    getColor : function(){
        return this.color;
    },
    changeWheel : function(position, newWheel){
        // ...
    };  
};

var c = new Car("blue");
var c2 = new Car("black");

c.getColor();


// pattern 2
"use strict"; // début de fichier

function Car(){
    var privAttr1 = 1,
        privAttr2 = false;
        
    function privMethod1(i){
        return i+1;
    }

    this.pubMethod1 = function(x){
        return privAttr2 ? Math.pow(x, 2) : privMethod1(x*2) + privAttr1;
    };   
}

var c = new Car(); // only exposes 'pubMethod1'


// pattern 3 (ES6)
var Car3 = (function(){
    var states = new WeakMap();
    
    function Car3(color){
        // JS engine initializes |this| to Object.create(Car.prototype)
        var s = Object.create(null);
        states.set(this, s)
        
        s.color = color;
        s.leftFrontWheel  = new Wheel();
        s.rightFrontWheel = new Wheel();
        s.leftRearWheel   = new Wheel();
        s.rightRearWheel  = new Wheel();
        // JS engine returns |this| (if the return value isn't an object)
    }
    
    Car3.prototype = {
        getColor : function(){
            var s = states.get(this);
            return s.color;
        },
        changeWheel : function(position, newWheel){
            // ...
        };  
    };
    
    return Car3;
})();


// pattern 4 with symbols 
// Not super useful because of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
