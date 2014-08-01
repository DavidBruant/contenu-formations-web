'use strict';

define([], function(){
    // tweet (data) => <li>
    return function createTweetLi(tweet){
        var li = document.createElement('li');

        // ... tweet

        return li;
    }
})



// tweetCollection.js

// tweets (Array de tweets) => <ol>
function createTweetCollection(tweets){
    var ol = document.createElement('ol');
    
    // ...  createTweetLi()
    
    return ol;
}

