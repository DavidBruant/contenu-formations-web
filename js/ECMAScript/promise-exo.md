# Suite de l'exercice

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

## écrire un fichier JS qui contient une seule fonction getTweets() qui retourne une promesse pour un array de tweets

getTweets() : Promise<Array<Tweet>>

main.js devient en essence :
````js
import getTweets from './getTweets';
// import nia nia nia

document.addEventListener('DOMContentLoaded', function(){
    getTweets().then(function(tweets){
        console.log('tweets', tweets);
        
        // ...

    })
})

````


## Modifier main.js pour qu'il utilise cette fonction


## Changer la fonction getTweets pour qu'elle charge des tweets de 2 urls

https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json
https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json
(20 tweets et 100 tweets)
combiner les résultats avec Promise.all() (et la méthode .concat() pour fusionner 
les tableaux)

L'exemple de MDN contient des arrow function 
````js
p.then(valeur => console.log(valeur))
````

Cette syntaxe est INTERDITE !! Utiliser : 
````js
p.then(function(valeur){ console.log(valeur) })
````