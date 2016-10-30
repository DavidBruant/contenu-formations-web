"use strict";

import moment from 'moment';

// Fonction createTweetLi

/* Implémentation classique */

// export default function createTweetLi(tweet){
// 	let li = document.createElement('li');
// 	let spanAuthor = document.createElement('span');
// 	let spanDate = document.createElement('span');
// 	let spanText = document.createElement('span');
// 	let metaBlock = document.createElement('div');
	
// 	let tweetTime = moment(tweet.created_at).fromNow();
// 	let tweetAuthor = tweet.user.name;
// 	let tweetText = tweet.text;

// 	metaBlock.classList.add('tweet-meta-block');
// 	li.classList.add('mon-tweet');
// 	spanAuthor.classList.add('tweet-author');
// 	spanDate.classList.add('tweet-date');
// 	spanAuthor.classList.add('tweet-text');

// 	spanAuthor.append(tweetAuthor);
// 	spanDate.append(tweetTime);

// 	metaBlock.appendChild(spanAuthor);
// 	metaBlock.append(' wrote ');
// 	metaBlock.appendChild(spanDate);

// 	li.appendChild(metaBlock);
// 	li.append(tweetText);

// 	return li;
// };

/* Implémentation avec es6 template et innerHTML */

export default function createTweetLi(tweet){

	let li = document.createElement('li');
	li.classList.add('mon-tweet');

	let tweetTime = moment(tweet.created_at).fromNow();
	let tweetAuthor = tweet.user.name;
	let tweetText = tweet.text;
	
	let liHtml = `
		<div class="tweet-meta-block">
			<span class="tweet-author">
				${tweetAuthor}
			</span>
			wrote
			<span class="tweet-date">
				${tweetTime}
			</span>
		</div>
		${tweetText}
		`
	li.innerHTML = liHtml;
	return li;
};