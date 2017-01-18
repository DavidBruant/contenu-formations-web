"use strict";

function createTweetLi(tweet) {
	// Create li
	var li = document.createElement('li');

	if (tweet.lang === "fr") {
	    li.classList.add("fr");
	} else {
	    li.classList.add("en");
	}
	li.textContent = tweet.text;

	return li;
}