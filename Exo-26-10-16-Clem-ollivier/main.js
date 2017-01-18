"use strict";

document.addEventListener('DOMContentLoaded', function(){

        // charger et afficher les tweets de 
        // 'https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json'

        fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
        .then(function(resp){return resp.json()})
        .then(function(tweets){

                // Création du container

                var maDiv = document.createElement('div');

                document.body.appendChild(maDiv);

                // Création des tableaux

                var tweetsTexts = tweets.map(function(tweet){
                    return tweet.text;
                });

                var createdAt = tweets.map(function(tweet){
                    return tweet.created_at;
                });

                var tweetsFr = tweets.filter(function(tweet){
                    return tweet.lang === 'fr';
                });

                // Création de la liste (ref : tweetOl.js)

                maDiv.appendChild(createTweetsOl(tweets));

                /*
                 * Création du bouton de sélection de la langue des Tweets
                 */

                 (function(){

                    var frButton = document.createElement('button');

                    var onlyFr = false;

                    frButton.addEventListener('click', function(e){

                        var listCreator;
                        maDiv.innerHTML = '';

                        if (!onlyFr) {
                            listCreator = createTweetsOl(tweetsFr);
                        } else {
                            listCreator = createTweetsOl(tweets);
                        }
                        maDiv.appendChild(listCreator);
                        onlyFr = !onlyFr;
                    });

                    document.body.appendChild(frButton);
                    frButton.textContent = 'FR ou pas';

                })();
            });           
    });