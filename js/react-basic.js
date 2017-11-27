/*
    Tweet.js ~~ makeTweetLi.js
*/
"use strict";

var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
    displayName: 'Tweet',

    getInitialState: function () {
        return {
            favorite: false
        };
    },

    render: function () {
        var self = this;
        var props = this.props;
        var state = this.state;

        console.log('favorite', state.favorite, props)

        return React.createElement(
            'li',
            {
                className: [
                    "tweet",
                    state.favorite ? 'favorite' : ''
                ].join(' ')
            },
            React.createElement('b', ...),
            this.props.text,
            React.createElement('i', {}, moment(this.props.created_at).fromNow()),
            React.createElement('button', {
                //disabled: state.favorite,
                onClick: function (e) {
                    self.setState({
                        favorite: !state.favorite
                    });
                }
            }, 'fav')
        );

    }
});

/*
    TweetList.js ~~ makeTweetOl.js
*/
"use strict";

var React = require('react');

var Tweet = require('./Tweet.js');


module.exports = React.createClass({
    displayName: 'TweetList',
    render: function () {

        return React.createElement(
            'ol',
            {},
            this.props.tweets.map(function (tweet) {
                return React.createElement(Tweet, tweet);
            })
        );

    }
});


/*
    displayTweets.js
    
    {
        tweets: [
            {text: "Je tweet et c'est cool !"},
            {text: "Chez VP en formation"}
        ]
    }
*/
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var TweetList = require('./TweetList.js');

module.exports = function (tweets) {
    ReactDOM.render(
        React.createElement(TweetList, { tweets: tweets }),
        document.body
    );
}


/*
    main.js
    (...code...)
*/
"use strict";

// getContent 

var displayTweets = require('./displayTweets.js');


var tweetsSoFar = [];

Promise.all(..µ.)
    .then(function () {
        // ...
        displayTweets(tweetsSoFar)
    })
    .catch()

