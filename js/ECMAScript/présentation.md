# Bases

* S'execute dans le navigateur, côté client.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview

* A quoi sert JavaScript (examples)

# Standards

* ECMAScript 3 (1999)
    * IE6+
* Pas de ECMAScript 4 !
* ECMAScript 5 (2009)
* ECMAScript 6 / 2015
    * Array.from

* Versions de JavaScript (1.7, 1.7.5, 1.8, etc.) n'ont aucune importance

# Syntax

* not: !x
* et: a && b
* ou: a || b

* a = b
* a = a+y
    a += y
* a = a+1
    a++


# Variables

Déclarer avec `var`
(montrer functions-var-scope.js)

Toujours utiliser le mode strict
"use strict";
https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode/Transitioning_to_strict_mode


# Valeurs

7 types : 

* number (1, 23, 1.6, Math.PI, etc.) (un seul type de nombre, pas de distinction int/float/double)

signe*mantisse*2^exp

* string ('', 'yo', 'whatever'). '' ou "" indifféremment
* boolean (true, false)
* undefined
* null (/!\ `typeof null === "object"`, comparer `maVariable === null`)
* object (`Object(x) === x`)
    * objet normal
    * function (typeof f === 'function')
    * Array (Array.isArray(x))
    * Date
    * RegExp
* symbols (ES6/2015)


# Comparaison

Toujours utiliser === et !==
== "presque égal"
=== "strictement égal"
Comparaison par référence pour les objets, par valeur pour le reste.

````js
(1 === 1)
('yo' === 'yo')

var o = {
    a: 1
};

var o2 = o;

o === o2;


var o3 = {
    a:1
}

o !== o3
````



# Strings

* 'Yo'.toUpperCase()
* 'Yo'.toLowerCase()
* 'Yo'.substring(start, end)
* 'Yo'.substr(start, length)
* str.replace(' ', '')
    * /!\ only the first occurence
* str.trim() (ES5)
* str.match()
* str.length

# Number

* NaN, Infinity
    * NaN !== NaN
    * Number.isNaN(x) // ES6/2015
* toto.toFixed(2)
* Math.PI.toFixed(3)
* Math.PI.toString()
* (35).toString()
* 35..toString()

* Math pour une collection de fonctions pour faire des maths.
* Math.random()
* Math.sqrt()
* Math.hypot() (ES6)
* Math.round/floor/ceil

# Booleans

* !!maVariable

## "Falsy values"

false
0
NaN
'' (chaine vide)
null
undefined

# Objects

"sac de propriété" + [[Prototype]]
"un objet c'est une armoire"

* clé (string) -> valeur (any)

(montrer objets.js)
(montrer classes.js)

* if(o.a){}
* o.a = 12
* delete o.a;
* Object.keys(o) (ES5)
* obj.hasOwnProperty('yo')
    * Object.prototype.hasOwnProperty.call(obj, 'yo');
* 'yo' in obj 
* Object.getPrototypeOf(o)


http://davidbruant.github.io/ObjectViz/

# Array

var arr = [12, 65, 546];

arr[0]
arr.length

* arr.forEach(function(e, i, a){

})
* a.map(f)
var arr = [12, 65, 546];
var arr2 = arr.map(function(e){ return e*e; });
* a.filter(f)
* Array.isArray(x)

* a.reduce(function(acc, curr){
    return acc+curr;
}, 0)

arr = [...Set(arr)] // unique (ES6)

# Fonctions

* f.call(thisVal, arg1, arg2, arg3)
* f.apply(thisVal, [arg1, arg2, arg3])
    * Math.max.apply(undefined, a);
    * (ES6/2015) Math.max(...a);
* f.bind(x)

(scopes)

# this

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this


# Polyfills

es5shim/es5sham
https://github.com/es-shims/es5-shim
https://github.com/paulmillr/es6-shim

# Concurrence

* Boucle évènementielle
https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop     
    * Pas de préemption (run-to-completion)
    * Pas d'accès concurrent synchrone à de la mémoire partagée
    * Pas de deadlock (conventionnel)
* Non-déterminisme limité à l'ordre de traitement des messages/évènements
* setTimeout/setInterval
* évènements

# Parallélisme

* WebWorkers + Transferable



/*
console.log()
getter/setter
*/