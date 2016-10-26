"use strict";

document.addEventListener('DOMContentLoaded', function(){

    fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
        .then(function(resp){return resp.json()})
        .then(function(tweets){

            // Show the first tweet in the console
            var firstTweet = tweets[0];
            console.log(firstTweet);

            // Show the first tweet's message in the console
            console.log(firstTweet.text);

            // Create a div with the first tweet's text as its content
            var div = document.createElement('div');
            div.textContent = firstTweet.text;
            document.body.appendChild(div);

            // Show the message of each tweet in the console
            tweets.forEach(function(tweet) {
                console.log(tweet.text);
            });

            // Create an array with only the tweets's messages
            var textOfTweets = tweets.map(function(tweet) {
                return tweet.text;
            });
            console.log(textOfTweets);

            // Create an array with only the tweets's creation date
            var creationDateOfTweets = tweets.map(function(tweet) {
                return tweet.created_at;
            });
            console.log(creationDateOfTweets);

            // Create an array with only the tweets in french
            var frenchTweets = tweets.filter(function(tweet) {
                return tweet.lang === 'fr';
            });
            console.log(frenchTweets);

            // Create an ol with an li for each tweet
            var tweetsOl = createTweetsOl(tweets);
            document.body.appendChild(tweetsOl);

            // Create a button and add it to the DOM
            var button = document.createElement('button');
            button.textContent = 'Filter tweets';
            document.body.appendChild(button);

            var tweetsAreFiltered = false;
            var frenchTweetsOl = createTweetsOl(frenchTweets);
            button.addEventListener('click', function(event) {
                // Show 'click' in the console when an user clicks on the button
                console.log('click');

                // Show and hide only french tweets when user clicks on button
                if (tweetsAreFiltered) {
                    document.body.replaceChild(tweetsOl, frenchTweetsOl);
                } else {
                    document.body.replaceChild(frenchTweetsOl, tweetsOl);
                }

                // Toggle the filtered status
                tweetsAreFiltered = !tweetsAreFiltered;
            });

            var firstLargeButton = createClickTimeButton('Click me once!');
            document.body.appendChild(firstLargeButton);
            var secondLargeButton = createClickTimeButton('Click me twice!');
            document.body.appendChild(secondLargeButton);

            var firstMousedownTimestamp, firstClickTimestamp, secondMousedownTimestamp, secondClickTimestamp;
            var largeButtons = [firstLargeButton, secondLargeButton];

            largeButtons.forEach(function(button) {
                button.addEventListener('mousedown', function(event) {
                    firstMousedownTimestamp = secondMousedownTimestamp;
                    secondMousedownTimestamp = event.timeStamp;
                });
            });

            largeButtons.forEach(function(button) {
                button.addEventListener('click', function(event) {
                    firstClickTimestamp = secondClickTimestamp;
                    secondClickTimestamp = event.timeStamp;
                    console.log('click time:', secondClickTimestamp - secondMousedownTimestamp);
                });
            });

            largeButtons.forEach(function(button) {
                button.addEventListener('dblclick', function(event) {
                    console.log('double click time', secondClickTimestamp - firstMousedownTimestamp)
                });
            });

        });

});