"use strict";

// Fonction createTweetsOl

var createTweetsOl = function(tweets){
	var listContainer = document.createElement('ol');
	tweets.forEach(function(tweet){
		var li = createTweetLi(tweet);
		listContainer.appendChild(li);
	});
	return listContainer;
};