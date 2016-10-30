"use strict";

export default function createClickButton(){
        let clickButton = document.createElement('button');

        /* Mettre les mousedown dans des variables, pour pouvoir les détruire à chaque nouveau doubleclick */

        let mouseDownTime, tempsClic1;
                        
        clickButton.addEventListener('mousedown', evt => {
            mouseDownTime = evt.timeStamp;
            return mouseDownTime;
        });

        clickButton.addEventListener('click', evt => {
            let clickTime = evt.timeStamp;
            tempsClic1 = clickTime - mouseDownTime;
            console.log(tempsClic1 / 1000);
        });

        clickButton.textContent = 'Click Timer';

        return clickButton;
};