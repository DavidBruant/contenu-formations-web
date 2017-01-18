"use strict";

import createTweetsOl from "./createTweetsOl";
import getTweets from "./getTweets";

document.addEventListener('DOMContentLoaded', function(){
    getTweets().then(function(tweets){
        // afficher l'ensemble 

        // var el = document.querySelector('#tweets');
        // var tweets = JSON.parse(el.textContent)

        console.log(tweets);
        // pour le premier tweet
        // l'afficher
        console.log(tweets[0])
        // afficher son message dans la console                
        console.log(tweets[0].text);
        // créer une div qui contient le texte du commit et ajouter la div au <body>

        var texteDuPremierTweet = tweets[0].text;

        /*
                // créer un nouvel élément 'div'
                var x = document.createElement('div');

                // rajouter un enfant
                parent.appendChild(enfant);

                // accéder au <body>
                document.body

                // changer le texte d'un élément
                element.textContent = str;
                */

        // afficher dans la console les text de tous les tweets du tableau en utilisant .forEach
        /*tweets.forEach(function(tweet){
                    console.log(tweet.text);
                });*/


        // créer un tableau avec seulement tous les textes des tweets
        var tweetTexts = tweets.map(function(tweet){
            return tweet.text;
        });
        //console.log('texts', tweetTexts)

        // créer un tableau avec seulement les dates de publication (created_at)
        var tweetDates = tweets.map(function(tweet){
            return tweet.created_at;
        });
        //console.log('dates', tweetDates)

        // créer un tableau avec seulement les tweets en français
        var frenchTweets = tweets.filter(function(t){
            return t.lang === 'fr';
        })
        //console.log('fr tw', frenchTweets)

        var withCoords = tweets.filter(function(t){
            return t.coordinates
        })
        console.log('withCoords', withCoords);

        // créer un <ol>
        /*var ol = document.createElement('ol');

                // pour chaque tweet, créer un <li>, mettre le texte dedans, mettre le <li> dans le <ol>
                tweets.forEach(function(t){
                    // création du li
                    var li = document.createElement('li');
                    li.textContent = t.text;

                    // composition
                    ol.appendChild(li);
                })*/

        // mettre le <ol> dans le <body>
        var ol = createTweetsOl(tweets);
        document.body.appendChild( ol );


        // isoler une fonction, qui pour un objet tweet créé un <li> (séparer la phase de création des éléments et de composition)

        // Créer et ajouter un <button> qui quand on clique dessus affiche 'click' dans la console.
        var b = document.createElement('button');
        b.textContent = 'Fr!';
        document.body.append(b);


        var all = true;

        // -- qui quand on clique ne garde que les tweets en français
        b.addEventListener('click', function(e){
            // virer la liste existante
            ol.remove();

            // afficher un <ol> avec uniquement les textes des tweets en français
            if(all){
                ol = createTweetsOl(frenchTweets);
            }
            else{
                ol = createTweetsOl(tweets);
            }

            all = !all;
            document.body.appendChild( ol );
        })


        // (et quand on reclique re-affiche tout)
        /*if(condition){
                    // ...
                }
                else{
                    // ...
                }*/


        // Faites un bouton (un peu gros) qui écoute mouseup/mousedown/click/dblclick et mesure le temps de click et de doubleclick 
        // et affiche tempsClic1, tempsClic2, tempsDoubleClic

        var b = document.createElement('button');
        b.textContent = 'YO!';
        document.body.append(b);

        var beforeLastMouseDownTimestamp;
        var lastMouseDownTimestamp;

        var beforeLastClickTimestamp;
        var lastClickTimestamp;

        b.addEventListener('mousedown', function(e){
            console.log('mousedown');
            beforeLastMouseDownTimestamp = lastMouseDownTimestamp;
            lastMouseDownTimestamp = e.timeStamp;

        });
        b.addEventListener('click', function(e){
            beforeLastClickTimestamp = lastClickTimestamp;
            lastClickTimestamp = e.timeStamp;

            console.log('click', lastClickTimestamp - lastMouseDownTimestamp);
        });
        b.addEventListener('dblclick', function(e){
            console.log('dblclick');                    

            console.log('c1', beforeLastClickTimestamp - beforeLastMouseDownTimestamp);
            console.log('c2', lastClickTimestamp - lastMouseDownTimestamp);
            console.log('dc', e.timeStamp - beforeLastMouseDownTimestamp);

        });

    })
        .catch(function(e){
        console.error(e);
    });

    // supprimer le gloubiboulga d'en haut
    // Créer plusieurs fichiers avec du code
    // * main.js
    // * createTweetLi.js
    // * createTweetsOl.js

    // charger tout ça via des <script src="...">

    // créer une fonction 'createClickTimeButton(text)' dans un nouveau fichier qui créé un bouton de calcul de temps de clic
    // (déplacer le code + l'appeler dans le main.js, 2 fois pour créer 2 boutons avec 2 textes différents)
    // 




})