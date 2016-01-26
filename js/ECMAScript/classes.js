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
    }
};

var c = new Car("blue");
var c2 = new Car("black");

c.getColor();


// pattern 2
"use strict"; // début de fichier

function Car(color){
    var privAttr = 25;
        
    function privMethod1(i){
        return i+1;
    }

    this.getColor = function(x){
        return color;
    };
    
    this.what = function(x){
        return privAttr + privMethod1(x);
    };
}

var c = new Car(); // only exposes 'getColor' and 'what'


// pattern 3 (ES6)
var Car3 = (function(){
    var states = new WeakMap();
    
    function Car3(color){
        // JS engine initializes |this| to Object.create(Car3.prototype)
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

new Car3();

// pattern 4 with symbols 
// Not super useful because of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols



function Car(){
    'use strict';
    if(!this) return new Car();

}

Car()
new Car()