"use strict";

var onlyFr = false;



document.addEventListener('DOMContentLoaded', function(){

fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
.then(function(resp){return resp.json()})
.then(function(tweets){
	// var el = document.querySelector('#tweets');
	// var tweets = JSON.parse(el.textContent)

	// pour le premier tweet
	// l'afficher
	console.log(tweets[0]);
	// afficher son message dans la console
	console.log("Message : " + tweets[0].text);
	// créer une div qui contient le texte du commit et ajouter la div au <body>
	var divMessage = document.createElement('div');
	document.body.appendChild(divMessage);

	var el = document.querySelector('div');

	tweets.forEach(function(tweet) {
	    createTweetOl(tweet);
	});

	/******************************************************************
	********************** SWITCH TWEETS DISPLAY **********************
	******************************************************************/

	document.getElementById('buttonTweets').addEventListener("click", function() {
	    onlyFr = !onlyFr;
	    var liFr = document.querySelectorAll(".en");
	    var liFr_Array = Array.prototype.slice.call(liFr);
	    var buttonTweets = document.getElementById('buttonTweets');

	    liFr_Array.forEach(function(element) {
	        if (onlyFr) {
	            element.classList.add("display_none");
	            buttonTweets.textContent = "Display All Tweets";
	        } else {
	            element.classList.remove("display_none");
	            buttonTweets.textContent = "Display French Tweets";
	        }
	    });

	});
	
	/******************************************************************
	********************** LISTENERS FAT BUTTON **********************
	******************************************************************/

	var listButtonFat = document.getElementsByClassName('buttonFat'), timer, num = 0;
	var mouseDownTimeStamp, mouseUpTimeStamp, clickTime;

	Array.from(listButtonFat).forEach(function(button) {
	   button.addEventListener("mouseup", function(result) {
		    mouseUpTimeStamp = result.timeStamp;
		    return mouseUpTimeStamp;
		});

		button.addEventListener("mousedown", function(event) {
		    event.preventDefault();
		    mouseDownTimeStamp = event.timeStamp;
		    return mouseDownTimeStamp;
		});

	    button.addEventListener("click", function(result) {
	    	clickTime = mouseUpTimeStamp - mouseDownTimeStamp;
		    console.log("Temps du click " + button.textContent + " : " + parseInt(clickTime) + " ms");
		    num % 2 == 0 && (timer = new Date().getTime());
	    	num++;
		});

		button.addEventListener("dblclick", function(result) {
		    var time2 = new Date().getTime();
		    var dblClickTime = time2 - timer;
		    console.log("Intervale double clic " + button.textContent + " : " + dblClickTime + " ms");
	    	
		});
	});

})
.catch(function(e){
	console.error(e);
});

    var bouton1 = createClickTimeButton("Bouton 1");
	var bouton2 = createClickTimeButton("Bouton 2");
    

})