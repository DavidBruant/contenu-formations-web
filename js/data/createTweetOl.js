"use strict";

function createTweetOl(tweets, lang){
  var ol = document.createElement('ol');
  tweets.forEach(function(element){
    ol.appendChild(createTweetLi(element));
  });
  return ol;
}
