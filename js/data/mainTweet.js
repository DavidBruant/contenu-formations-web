"use strict";

document.addEventListener('DOMContentLoaded', function(){

    fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
        .then(function(resp){return resp.json()})
        .then(function(tweets){

            // Show the first tweet in the console
            // var firstTweet = tweets[0];
            // console.log(firstTweet);

            // Show the first tweet's message in the console
            // console.log(firstTweet.text);

            // Create a div with the first tweet's text as its content
            var div = document.createElement('div');
            div.textContent = firstTweet.text;
            document.body.appendChild(div);

            // Show the message of each tweet in the console
            // tweets.forEach(function(tweet) {
            //     console.log(tweet.text);
            // });

            // Create an array with only the tweets's messages
            var textOfTweets = tweets.map(function(tweet) {
                return tweet.text;
            });

            // Create an array with only the tweets's creation date
            var creationDateOfTweets = tweets.map(function(tweet) {
                return tweet.created_at;
            });

            // Create an array with only the tweets in french
            var frTweets = tweets.filter(function(tweet) {
                return tweet.lang === 'fr';
            });

            // Create an ol with an li for each tweet
            var tweetsOl = createTweetsOl(tweets);
            document.body.appendChild(tweetsOl);

            // Create a button and add it to the DOM
            var button = document.createElement('button');
            button.textContent = 'Filter tweets';
            document.body.appendChild(button);

            var tweetsAreFiltered = false;
            var frTweetsOl = createTweetsOl(frTweets);
            button.addEventListener('click', function(event) {

                if (tweetsAreFiltered) {
                    document.body.replaceChild(tweetsOl, frTweetsOl);
                } else {
                    document.body.replaceChild(frTweetsOl, tweetsOl);
                }
                tweetsAreFiltered = !tweetsAreFiltered;
            });

            var button1 = createClickTimeButton('Premier click');
            document.body.appendChild(button1);
            var button2 = createClickTimeButton('Deuxième click');
            document.body.appendChild(button2);

            var firstMousedownTimestamp, firstClickTimestamp, secondMousedownTimestamp, secondClickTimestamp;
            var buttons = [button1, button2];

            buttons.forEach(function(button) {
                button.addEventListener('mousedown', function(event) {
                    firstMousedownTimestamp = secondMousedownTimestamp;
                    secondMousedownTimestamp = event.timeStamp;
                });
            });

            buttons.forEach(function(button) {
                button.addEventListener('click', function(event) {
                    firstClickTimestamp = secondClickTimestamp;
                    secondClickTimestamp = event.timeStamp;
                    console.log('click time:', secondClickTimestamp - secondMousedownTimestamp);
                });
            });

            buttons.forEach(function(button) {
                button.addEventListener('dblclick', function(event) {
                    console.log('double click time', secondClickTimestamp - firstMousedownTimestamp)
                });
            });

        });

});