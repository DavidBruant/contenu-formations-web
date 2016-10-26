"use strict";

function createTweetLi(tweet) {
    var li = document.createElement('li');

    li.textContent = tweet.text;

    return li;
}