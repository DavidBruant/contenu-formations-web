/*
    Indépendamment du langage, on veut récupérer 3 contenus indépendants (fichiers sur un serveur, données de base de données, données open data, etc.).
    On veut faire un traitement (fonction `combine` fictive) seulement quand on a tout reçu.
 */

// 1. sync (C, Java, PHP par défaut)
var f = readfile(file);
// on ne va pas chercher g tant que f n'est pas revenu
// le programme ne fait rien entre ces deux lignes.
// Ca peut durer plusieurs secondes quand on attend une requête réseau
var g = readfile(file2);
// idem
var h = readfile(file3);

// cette fonction n'est appelée que quand les 3 sont revenus. 
combine(f, g, h);



// 2. Node.js
// En Node, les fonctions qui imposeraient un temps d'attente long (lecture réseau, lecture disque, requête BDD) ne retournent pas le résultat. A la place, elles prennent une fonction de "callback" qui contient le résultat.
var f, g, h;

readfile(file, function(err, _f){
    f = _f;
    if(f && g && h)
        combine(f, g, h);
});
readfile(file2, function(err, _g){
    g = _g;
    if(f && g && h)
        combine(f, g, h);
});
readfile(file3, function(err, _h){
    h = _h;
    if(f && g && h)
        combine(f, g, h);
});

/*
    Le problème, c'est que le code a un peu de duplication et est moins lisible.
*/

// 2.bis Node.js 2
readfile(file, function(err, f){
    readfile(file2, function(err, g){
        readfile(file3, function(err, h){
            combine(f, g, h);
        });
    });
});

/*
    C'est plus compact, mais on perd la perf, c'est dommage
 */

// 3. Promise
/*
    l'idée des promesses, c'est de représenter une valeur que l'on n'a pas encore reçu; une "promesse" pour une valeur.
    Une fonction retourne une valeur qui n'est pas la bonne, mais un objet.
    On peut ensuite "utiliser"/"interroger" cet objet pour obtenir la vraie valeur quand elle est prête.
 */

// https://twitter.com/edouard_lopez/status/527814903693062144

// 3.1 exemple de base

var fP = readfile(file);
// fP : Promise
// f : vrai contenu, valeur de résolution
fP.then(function(f){
    console.log(f)
});

// 3.2 gestion des erreurs
fP.catch(function(err){
    console.error(err)
});

// 3.3 chainer

var ffP = fP.then(function(f){
    var obj = JSON.parse(f);
    var fichierSuivant = obj.next;
    return readfile(fichierSuivant);
});

// contenuSuivant === résultat de readfile(fichierSuivante)
var fffP = ffP.then(function(contenuSuivant){
    return contenuSuivant.nombres.map(function(e){ return e*e })
})

fffP.then(...)
.then(...)
.catch(...)

// 3.4 combiner

var fP = readfilePromise(file);
var gP = readfilePromise(file2);
var hP = readfilePromise(file3);

/* Promise.all est une fonction fournie qui manipule l'abstraction Promise.
Elle prend en argument un tableau de promesses [p1, p2, ... ,pn]
et retourne une (n+1)ème promesse qui sera résolue quand *toutes* les promesses sont résolues.
La valeur de résolution de cette nouvelle promesse est un tableau qui contient toutes les valeurs de résolution.
... et on a regagné en lisibilité de code
*/
var allP = Promise.all([fP, gP, hP])
.then(function(results /* [f, g, h] */){
    var f = results[0];
    var g = results[1];
    var h = results[2];
    return combine(f, g, h);
})
.catch(errorHandler);

/*var timeoutP = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject(new Error('Timeout!'))
    }, 5000)  
})
Promise.race([allP, timeoutP])*/

fP.then(function(f){
    blabla(f)
  }) // 'then' returns a promise for the length
  .catch(function(err){
      //...
  }) // 'catch' returns a promise too
  


// fetch

fetch(url)
.then(function(resp){
    // réponse HTTP (avec code de statut et headers, mais pas de body)
    resp.headers
    resp.status
    // ...
    //return resp.text();
    return resp.json()
})
.then(function(body){

})


/*
Suite de l'exercice :
1) écrire un module qui contient une seule fonction getTweets() qui retourne une 
promesse pour un array de tweets
2) modifier main-react.js pour qu'il utilise cette fonction
3) changer la fonction pour qu'elle charge des tweets de 2 urls :
https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json
https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json
(20 tweets et 100 tweets)
combiner les résultats avec Promise.all() (et la méthode .concat() pour fusionner 
les tableaux)

L'exemple de MDN contient des arrow function 
````js
p.then(valeur => console.log(valeur))
````
Cette syntaxe est INTERDITE !!
Utiliser : 
````js
p.then(function(valeur){ console.log(valeur) })
 */


button.addEventListener('click', function l(e){
    //desactiver
    //button.removeEventListener('click', l);
    button.setAttribute('disabled', '');

    traitement()
    .then(function(){
        button.removeAttribute('disabled');
        //button.addEventListener('click', l)
    })
    .catch(function(err){
        afficherErreur(err);
        button.removeAttribute('disabled');
        //button.addEventListener('click', l)
    })
})