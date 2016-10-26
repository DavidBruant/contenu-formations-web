"use strict";

// Fonction createTweetLi

var createTweetLi = function(tweet){
	var li = document.createElement('li');
	li.classList.add('mon-tweet');
	li.textContent = tweet.text;
	return li;
};