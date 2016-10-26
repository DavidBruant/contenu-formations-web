"use strict";

function createClickTimeButton(label) {
    var button = document.createElement('button');
    button.textContent = label;
    button.style.padding = "20px";
    button.style.fontSize = "16px";
    button.style.display = "block";

    return button;
}