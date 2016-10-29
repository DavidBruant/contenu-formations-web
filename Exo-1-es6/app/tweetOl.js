"use strict";

import createTweetLi from './tweetLi.js';

// Fonction createTweetsOl

export default function createTweetsOl(tweets){
	let listContainer = document.createElement('ol');
	tweets.forEach(tweet => {
		let li = createTweetLi(tweet);
		listContainer.appendChild(li);
	});
	return listContainer;
};