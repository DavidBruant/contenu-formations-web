"use strict";

document.addEventListener('DOMContentLoaded', function(){

  // charger et afficher les tweets de
  // 'https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json'

  fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
  .then(function(resp){return resp.json();})
  .then(function(tweets){
    // var el = document.querySelector('#tweets');
    // var tweets = JSON.parse(el.textContent)
    console.log(tweets);
    // pour le premier tweet
    var tw = tweets[0];
    // l'afficher
    console.log(tw);
    // afficher son message dans la console
    console.log(tw.text);
    // créer une div qui contient le texte du commit et ajouter la div au <body>
    var x = document.createElement('div');
    x.textContent = tw.text;
    document.body.appendChild(x);

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
    tweets.forEach(function(element){
      console.log(element.text);
    });
    // créer un tableau avec seulement tous les textes des tweets
    var tweetText = tweets.map(function(elem){
      return elem.text;
    });
    // créer un tableau avec seulement les dates de publication (created_at)
    var tweetCreated = tweets.map(function(elem){
      return elem.created_at;
    });
    // créer un tableau avec seulement les tweets en français
    var tweetFr = tweets.filter(function(elem){
      return elem.lang === 'fr';
    });

    // créer un <ol>
    // pour chaque tweet, créer un <li>, mettre le texte dedans, mettre le <li> dans le <ol>
    // mettre le <ol> dans le <body>
    // isoler une fonction, qui pour un objet tweet créé un <li> (séparer la phase de création des éléments et de composition)
    var lang = true;

    // Créer et ajouter un <button> qui quand on clique dessus affiche 'click' dans la console.
    // -- qui quand on clique ne garde que les tweets en français
    // (et quand on reclique re-affiche tout)

    var btn = document.createElement('button');
    btn.textContent = 'Tweet FR';

    // Faites un bouton (un peu gros) qui écoute mouseup/mousedown/click/dblclick et mesure le temps de click et de doubleclick
    // et affiche tempsClic1, tempsClic2, tempsDoubleClic
    var btnBig = document.createElement('button');
    var timeDisplay = document.createElement('span');
    btnBig.textContent = 'BIG BUTTON ';
    btnBig.onmousedown = timeClick;
    function timeClick(event){
      var time = new Date();
      btnBig.onmouseup = function() {
        var diff=new Date() - time;
        timeDisplay.textContent = diff + 'ms';
        window.onmouseup=null;
      };
      return true;
    }

    var ol = createTweetOl(tweets);

    btn.addEventListener("click", function(){
      var Ols = document.getElementsByTagName("ol");
      var removeOls = Array.prototype.slice.call(Ols);
      removeOls.forEach(function(elem){
        elem.innerHTML = "";
      });
      if(lang){
        document.body.appendChild(createTweetOl(tweetFr));
      }else{
        document.body.appendChild(createTweetOl(tweets));
      }
      lang = !lang;
      document.body.appendChild(ol);
    });

    document.body.appendChild(btn);
    document.body.appendChild(btnBig);
    document.body.appendChild(timeDisplay);
    document.body.appendChild(ol);
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


});
