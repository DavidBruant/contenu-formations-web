"use strict";

function createTweetOl(tweet) {
	var ol = document.createElement('ol');
	var el = document.querySelector('div');
	el.appendChild(ol);

	var li = createTweetLi(tweet);
	ol.appendChild(li);

	return ol;
}