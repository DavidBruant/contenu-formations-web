'use strict';

var titre = document.createElement('h1');
titre.textContent = 'Hello!'; // ligne
console.log(titre);

var corps = document.querySelector('body');
corps.appendChild(titre);

var maDiv = document.createElement('div');
maDiv.className = 'active';

/*
bla bl

bla 
sur plusieurs lgnes

*/