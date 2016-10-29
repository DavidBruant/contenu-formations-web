"use strict";

import createTweetsOl from './tweetOl.js';
import createClickButton from './clickTimer.js';
import getTweets from './getTweets.js';

document.addEventListener('DOMContentLoaded', function(){

        // Création du container principal

        let mainWrapper = document.createElement('div');
        mainWrapper.classList.add('main-wrapper');

        // Création de la sidebar

        let sidebarWrapper = document.createElement('div');
        sidebarWrapper.classList.add('sidebar-wrapper');

        document.body.appendChild(mainWrapper);
        document.body.appendChild(sidebarWrapper);

        let monBouton = createClickButton();
        sidebarWrapper.appendChild(monBouton);

        let frButton = document.createElement('button');
        sidebarWrapper.appendChild(frButton);
        frButton.textContent = 'Toggle language';


            getTweets()
                .then(function(tweets){

                // Création des tableaux

                //Syntaxe ES5
                // var tweetsText = tweets.map(function(tweet){
                //     return tweet.text;
                // });

                let tweetsTexts = tweets.map(tweet => tweet.text);

                let createdAt = tweets.map(tweet => tweet.created_at);

                let tweetsFr = tweets.filter(tweet => tweet.lang === 'fr');

                // Création de la liste (ref : tweetOl.js)

                let tweetsContainer = createTweetsOl(tweets);

                mainWrapper.appendChild(tweetsContainer);

                /*
                 * Création du toggle de sélection de la langue des Tweets
                 */

                 (function(){

                    let onlyFr = false;

                    frButton.addEventListener('click', function(e){

                        let listCreator;
                        mainWrapper.innerHTML = '';

                        if (!onlyFr) {
                            listCreator = createTweetsOl(tweetsFr);
                        } else {
                            listCreator = createTweetsOl(tweets);
                        }
                        mainWrapper.appendChild(listCreator);
                        onlyFr = !onlyFr;
                    });

                })();
            });           
            });