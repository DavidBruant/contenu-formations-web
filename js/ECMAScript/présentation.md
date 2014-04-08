# Standards

* ECMAScript 3 (1999)
    * IE6+
* Pas de ECMAScript 4 !
* ECMAScript 5 (2009)
* ECMAScript 6 (en cours)

* Versions de JavaSCript (1.7, 1.7.5, 1.8, etc.) n'ont aucune importance

# Bases

* S'execute dans le navigateur, côté client.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview

# Variables

Déclarer avec `var`

# Valeurs

6 types : 

* number (1, 23, 1.6, etc.) (un seul type de nombre, pas de distinction int/float/double)
* string ('', 'yo', 'whatever'). '' ou "" indifféremment
* boolean (true, false)
* undefined
* null (/!\ `typeof null === "object"`, comparer `maVariable === null`)
* object
    * function
    * Array
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

Toujours utiliser ===
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

* Math pour une collection de fonctions pour faire des maths.

# Booleans

* !!maVariable

# Objects

"sac de propriété"

* clé (string) -> valeur (any)


* Object.keys(o)
* obj.hasOwnProperty('yo')
* Object.getPrototypeOf(o)


http://davidbruant.github.io/ObjectViz/

# Array

* a.forEach(f)
* a.map(f)
* a.filter(f)
* Array.isArray(x)

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

* WebWorkers





/*
Strict mode
console.log()
getter/setter
*/