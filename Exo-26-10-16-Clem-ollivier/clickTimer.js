"use strict";

var clickButton = document.createElement('button');

(function(){

    /* Mettre les mousedown dans des variables, pour pouvoir les détruire à chaque nouveau doubleclick */

    var mouseDownTime, tempsClic1;
                    
    clickButton.addEventListener('mousedown', function(e){
        mouseDownTime = e.timeStamp;
        return mouseDownTime;
    });

    clickButton.addEventListener('click', function(e){
        var clickTime = e.timeStamp;
        tempsClic1 = clickTime - mouseDownTime;
        console.log(tempsClic1 / 1000);
    });

})();

document.body.appendChild(clickButton);

clickButton.textContent = 'Click Timer';