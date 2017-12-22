# Suite de l'exercice

## Objectif 

`main.js` devient en essence :

````js
import getTweets from './getTweets';
// import nia nia nia

document.addEventListener('DOMContentLoaded', function(){
    // on supprime "fetch( niania )..."
    var tweetsP = getTweets();
    
    tweetsP.then(function(tweets){
        console.log('tweets', tweets);
        // ...
    })
})
````

## Implémentation

`npm i json-fetch --save`

main.js
````js
import jsonFetch from 'json-fetch';

// jsonFetch(url) => Promise<obj>

jsonFetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json', {credentials: 'omit'})
.then(function(response){
    var tweets = response.body;
    
    // ...
})
````



## Changer la fonction getTweets pour qu'elle charge 120 tweets de 2 urls

https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json
https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json
(20 tweets et 100 tweets)
combiner les résultats avec `Promise.all()` (et la méthode `.concat()` pour fusionner 
les tableaux)
