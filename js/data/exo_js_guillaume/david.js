"use strict";
document.addEventListener('DOMContentLoaded', function(){
    // charger et afficher les tweets de 
    // 'https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json'
    fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
        .then(function(resp){return resp.json()})
        .then(function(tweets){
        var tweet = tweets[0].text;

        // var el = document.querySelector('#tweets');
        // var tweets = JSON.parse(el.textContent)
        //        x.innerHTML = tweet;
        // pour le premier tweet
        // l'afficher
        // afficher son message dans la console                
        // créer une div qui contient le texte du commit et ajouter la div au <body>

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
        tweets.forEach(function(el){
            console.log(el.text);
        })




        // créer un tableau avec seulement tous les textes des tweets
        var tweets_texts = tweets.map(function(el){
            return el.text;
        });




        // créer un tableau avec seulement les dates de publication (created_at)
        var tweets_dates = tweets.map(function(el){
            return el.created_at;
        })




        // créer un tableau avec seulement les tweets en français
        var tweets_fr = tweets.filter(function(el){
            return el.lang === "fr";
        })

        console.log(tweets_texts);
        console.log(tweets_dates);
        console.log(tweets_fr);



        // créer un <ol>
        // pour chaque tweet, créer un <li>, mettre le texte dedans, mettre le <li> dans le <ol>
        // mettre le <ol> dans le <body>
        // isoler une fonction, qui pour un objet tweet créé un <li> (séparer la phase de création des éléments et de composition)

        function createTweetLi(tweet){
            var li = document.createElement('li');     
            li.textContent = tweet.text;
            return li;
        }

        function createTweetsOl(tweets){
            var ol = document.createElement('ol');
            tweets.forEach(function(el){
                var li = createTweetLi(el)
                ol.appendChild(li);
            })
            return ol;
        }


        // Créer et ajouter un <button> qui quand on clique dessus affiche 'click' dans la console.
        // -- qui quand on clique ne garde que les tweets en français
        // (et quand on reclique re-affiche tout)
        /*if(condition){
                    // ...
                }
                else{
                    // ...
                }*/


        var button = document.getElementById('button'); 
        var state = "all";
        var ol;
        button.addEventListener('click',function(event){
            if(ol){
                ol.remove();
            }

            if(state === "all"){
                ol = createTweetsOl(tweets);
                state = "fr";
                button.textContent = "Générer tous";
            }else{
                ol = createTweetsOl(tweets_fr);
                state = "all";
                button.textContent = "Générer FR";
            }
            document.body.appendChild(ol);
        })





        // Faites un bouton (un peu gros) qui écoute mouseup/mousedown/click/dblclick et mesure le temps de click et de doubleclick 
        // et affiche tempsClic1, tempsClic2, tempsDoubleClic
        var button2 = document.getElementById('button2');
        var mouseAction = document.getElementById("mouseAction");
        var result = document.getElementById("result");
        var firstTS;
        var lastTS;
        var TS;
        
        button2.addEventListener('mousedown',function(event){
            mouseAction.textContent='Mouse Down !';
            firstTS = event.timeStamp;
        });
        
        button2.addEventListener('click',function(event){
            mouseAction.textContent='click !';
            lastTS = event.timeStamp;
            TS = lastTS - firstTS;
            result.textContent = TS;
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
})