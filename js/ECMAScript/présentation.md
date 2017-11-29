# Bases

* S'execute dans le navigateur, côté client.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview

* A quoi sert JavaScript (examples)

# Standards

* ECMAScript 3 (1999)
    * IE8+
* Pas de ECMAScript 4 !
* ECMAScript 5 (2009)
* ECMAScript 6 / 2015
    * Array.from
    * Arrow function
* ECMAScript 2016
* ECMAScript 2017
* ECMAScript 2018
* ...

* Versions de JavaScript (1.7, 1.7.5, 1.8, etc.) n'ont aucune importance

https://kangax.github.io/compat-table/es6/

# Syntaxe

* not: !x
* et: a && b
* ou: a || b

* a = b
* a = a+y
    * a += y
* a = a+1
    * a++Object.prototype.toString.c

````js
if(x){
    // x === true
}
else{
    // x === false
}
````


# Variables

Toujours déclarer avec `const` ou `let` (IE11+. Anciennement `var`)

Toujours utiliser le mode strict `"use strict";`

https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode/Transitioning_to_strict_mode

http://www.pixelstech.net/article/1320253282-How-One-Missing-%60var%60-Ruined-our-Launch

````js
"use strict";
var a = 1;

b = 2; // INTERDIT ! (mais pas grave)

function c(d){
    var e = 45;
    f = "zertu"; // INTERDIT !

    return e + d + a;
}

function g(){
    var f; // undefined
    console.log('yo');
    f = "zertu"; // Pas d'prob !

    return f;
}
````


# Le code du futur dans les navigateurs du présent

## Syntaxe - babel

Babel https://babeljs.io/

## Runtime - polyfills

Bibliothèque qui implémente un standard

https://cdn.polyfill.io/v2/docs/

http://labs.ft.com/2014/09/polyfills-as-a-service/

````
1) rajouter les polyfills
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,Promise"></script>

2) code métier
````


# Valeurs

| type          | typeof x    | Bon test          | Exemples                      |
|---------------|-------------|-------------------|-------------------------------|
| boolean       | "boolean"   |                   | `true`, `false`               |
| string        | "string"    |                   | `''`, `"yo !"`, ``whatever``  |
| number        | "number"    |                   | `1`, `-2.3`, `NaN`, `Infinity` |
| undefined     | "undefined" |                   |                               |
| null          | ⚠ "object"  | `x === null`      |                               |
| symbol (ES2015) | "symbol"    |                   |                               |
| simple object | "object"    | `Object(x) === x` | `{}`, `{a:1, b: "2"}`         |
|---------------|-------------|-------------------|-------------------------------|
| function      | ⚠ "function" |                   | `function somme(a, b){return a+b;}` |
| array         | ⚠ "object"  | `Array.isArray(x)` | `[]`, `[1, 76, 87]`           |
| set, map, weakmap, promise, date, regexp  | "object" | `Object.prototype.toString.call(x)` |  |      

                         |
https://rawgit.com/DavidBruant/contenu-formations-web/beb866b3e6c294b2da586fa79d09a1df6f735528/js/data/liste-musees-de-france-a-paris.json

# Comparaison

Toujours utiliser === et !==

== "presque égal"

=== "strictement égal"

http://dorey.github.io/JavaScript-Equality-Table/

Comparaison par référence pour les objets, par valeur pour le reste.

````js
'use strict';

(1 === 1)
('yo' === 'yo')

var o = {
    a: 1
};

var o2 = o;

console.log(o === o2); // true


var o3 = {
    a:1
}

console.log(o === o3) // false

o2.b = 24;
console.log(o.b) // 24
````

## Exception

* `NaN` => `Number.isNaN`


# Strings

* 'Yo'.slice(start, end)
* 'Yo'.substring(start, end)
* 'Yo'.substr(start, length)
* 'yyyyyyy'.replace('y', 'a')
    * /!\ only the first occurence
    * 'yyyyyyy'.replace(/y/g, 'a')
* str.trim()
* str.match()
* str.length

[Enlever les accents](https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463)

# Number

* NaN, Infinity
    * NaN !== NaN
    * Number.isNaN(x) // ES6/2015
* 0.1 + 0.2
* Math.PI.toFixed(3)
* Math.PI.toString()

* Math pour une collection de fonctions pour faire des maths.
* Math.random()
* Math.round/floor/ceil

# Booleans

* !!maValeur

## "Falsy values"

```
false
0
NaN
'' (chaine vide)
null
undefined
```

* 67 && 37 && null && 'kjhg'
* 0 || 37 || null
    * Number.isNaN = Number.isNaN || function(x){return x!==x};
    * function f(a, b){
        b = b || 0;
        
        return a+b
    }
    
    f('32');

## !!object === true

````js
var el = document.querySelector('table tr.active'); // element | null
if(el){ // Object(el) === el

}
else{ // el === null

}
````

# Objects

"sac de propriété" + [[Prototype]]
"un objet c'est une armoire"

* propriété : clé (string) -> valeur (any)

(montrer [objets.js](./objets.js))

* if(o.a){}
    * o["a"] :=: o.a
* o.a = 12
* delete o.a;
* Object.keys(o) (ES5)
* obj.hasOwnProperty('yo')
    * Object.prototype.hasOwnProperty.call(obj, 'yo');
* 'yo' in obj 
* Object.getPrototypeOf(o)


http://davidbruant.github.io/ObjectViz/

# JSON

JSON : JavaScript Object Notation
Format d'échange (manière de sérialiser des données structurées)

`JSON.stringify(obj) => string`
`JSON.parse(string) => obj`


````js
var o = {
  a: 1,
  bloublou: 9,
  chapito: "yo",
  brave: {
    autre: "object"
  }
}

var o2 = {
  a: o
};

o.stylo = o2

console.log(JSON.stringify(o))
````

# Array

```js
"use strict";

console.clear()
var arr = [12, 65, 546];

console.log('mon tableau', arr[0], arr.length)

arr.forEach(function(e){
  console.log(e+27)
})


for(let e of arr){
  console.log('for', e)
}

```

## Différences entre un array et un object "normal" en JavaScript

* Syntaxe de création

`{a: 1}` vs `['yo', 'ya', 'yi']`

* Les arrays ont une propriété `length` magique
* `Array.isArray(x)`


## Utilisation des tableaux

https://twitter.com/steveluscher/status/741089564329054208

* a.map(f)

```js
var arr = [12, 65, 546];
var arr2 = arr.map(function(e){ return e*e; });
```

* a.filter(f)

```js
var arr = [12, 2, 76, 65, 545, 98, 57, 34];
var arr2 = arr.filter(function(e){ return e%2 === 0; });
```

// https://github.com/MyWebIntelligence/MyWebIntelligence/blob/master/common/cleanupURLs.js

* a.reduce(function(acc, curr){
    return acc+curr;
}, 0)

* a.slice(debut, fin)

````js
arr
.slice(0, 5)
.forEach(function(e, i, a){
  console.log(e, i, a)
})
````

* a.find(pred)

````js
var found = arr.find(function(e){
    return e >= 1000 && e%27 === 13;
})
````

* a.sort(fun)

arr = [...new Set(arr)] // unique (ES6/2015)
ou https://lodash.com/docs/4.17.4#uniq

# Set/Map

````js
var s = new Set(arr)
s.add(value)
s.has(value)
s.delete(value)
````

````js
var map = new Map();
// Map : clé (any) => valeur (any)
map.set(key, value)
map.get(key)
map.has(key)
map.delete(key)
map.keys() // iterator
````

````js
var wm = new WeakMap();
wm.set(key, value)
wm.get(key)
wm.has(key)
wm.delete(key)
// pas de .keys(), on ne peut pas itérer sur une WeakMap
````



# Fonctions

* f.call(thisVal, arg1, arg2, arg3)
* f.apply(thisVal, [arg1, arg2, arg3])
    * Math.max.apply(undefined, a);
    * (ES6/2015) Math.max(...a);
* f.bind(x)

(scopes)

# this

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

* (montrer classes.js)




# Concurrence

* Boucle évènementielle
https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
while(1){
    var e = pickMessage('all');
    processEvent(e)
}
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
