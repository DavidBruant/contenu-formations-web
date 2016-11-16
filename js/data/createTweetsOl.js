"use strict";

function createTweetsOl(tweets) {
    var ol = document.createElement('ol');
    tweets.forEach(function(tweet) {
        var li = createTweetLi(tweet);
        ol.appendChild(li);
    });
    return ol;
}