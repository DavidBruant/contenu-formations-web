"use strict";

function createClickTimeButton(text) {
	// Create + init button
	var button = document.createElement('button');
	var body = document.body;
	console.log(buttonTweets);
	button.classList.add("buttonFat");
	button.textContent = text;

	// Add new button to body
	body.appendChild(button);

	return button;
}