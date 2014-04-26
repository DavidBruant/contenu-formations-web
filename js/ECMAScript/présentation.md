# Bases

* S'execute dans le navigateur, côté client.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview

# Standards

* ECMAScript 3 (1999)
    * IE6+
* Pas de ECMAScript 4 !
* ECMAScript 5 (2009)
* ECMAScript 6 (en cours)
    * Array.from

* Versions de JavaScript (1.7, 1.7.5, 1.8, etc.) n'ont aucune importance



# Variables

Déclarer avec `var`

# Valeurs

6 types : 

* number (1, 23, 1.6, etc.) (un seul type de nombre, pas de distinction int/float/double)

signe*mantisse*2^exp

* string ('', 'yo', 'whatever'). '' ou "" indifféremment
* boolean (true, false)
* undefined
* null (/!\ `typeof null === "object"`, comparer `maVariable === null`)
* object (`Object(x) === x`)
    * objet normal
    * function (typeof x === 'function')
    * Array (Array.isArray(x))
    * Date
    * RegExp
(ES6 : symbols)

# "Falsy values"

0
NaN
'' (chaine vide)
null
undefined


# Comparaison

Toujours utiliser === et !==
Comparaison par référence pour les objets, par valeur pour le reste.

# Strings

* 'Yo'.toUpperCase()
* 'Yo'.toLowerCase()
* 'Yo'.substring(start, end)
* 'Yo'.substr(start, length)
* str.replace(' ', '')
* str.trim()
* str.match()
* str.length

# Number

* NaN, Infinity
* Math.PI.toFixed(3)
* Math.PI.toString()
* (35).toString()
* 35..toString()

* Math pour une collection de fonctions pour faire des maths.

# Booleans

* !!maVariable

# Objects

"sac de propriété" + [[Prototype]]

* clé (string) -> valeur (any)

* if(o.a){}
* o.a = 12
* delete o.a;
* Object.keys(o)
* obj.hasOwnProperty('yo')
* Object.getPrototypeOf(o)


http://davidbruant.github.io/ObjectViz/

# Array

* arr.forEach(function(e, i, a){

})
* a.map(f)
* a.filter(f)
* Array.isArray(x)

* a.reduce(function(acc, curr){
    return acc+curr;
}, 0)

arr = [...Set(arr)]

# Fonctions

* f.call(thisVal, arg1, arg2, arg3)
* f.apply(this.Val, [arg1, arg2, arg3])
* f.bind(x)

(scopes)

# this

MDN(this)


# Polyfills

es5shim/es5sham

# Concurrence

* Boucle évènementielle
(montrer schema MDN)
    * Pas de préemption (run-to-completion)
    * Pas d'accès concurrent synchrone à de la mémoire partagée
    * Pas de deadlock (conventionnel)
* Non-déterminisme limité à l'ordre de traitement des messages/évènements
* setTimeout/setInterval
* évènements

# Parallélisme

* WebWorkers + Transferable





/*
Strict mode
console.log()
getter/setter
*/