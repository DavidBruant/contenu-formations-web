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
    a += y
* a = a+1
    a++

````js
if(x){
    // x === true
}
else{
    // x === false
}
````


# Variables

Déclarer avec `var`

Toujours utiliser le mode strict
"use strict";

https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode/Transitioning_to_strict_mode


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


# Polyfills

https://cdn.polyfill.io/v2/docs/

http://labs.ft.com/2014/09/polyfills-as-a-service/


# Valeurs

| type          | typeof x    | Bon test          | Exemples                      |
|---------------|-------------|-------------------|-------------------------------|
| boolean       | "boolean"   |                   | `true`, `false`               |
| string        | "string"    |                   | `''`, `"yo !"`, `'whatever'`  |
| number        | "number"    |                   | `1`, `-2.3`, `NaN`, `Infinity` |
| undefined     | "undefined" |                   |                               |
| null          | ⚠ "object"  | `x === null`      |                               |
| symbol (ES2015) | "symbol"    |                   |                               |
| simple object | "object"    | `Object(x) === x` | `{}`, `{a:1, b: "2"}`         |
|---------------|-------------|-------------------|-------------------------------|
| function      | ⚠ "function" |                   | `function(a, b){return a+b;}` |
| array         | ⚠ "object"  | `Array.isArray(x)` | `[]`, `[1, 76, 87]`           |
| set, map, weakmap, promise, date, regexp  | "object" | `Object.prototype.toString.call(x)` |  |                               |


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
* 'Yo'.slice(start, end)
* 'Yo'.substring(start, end)
* 'Yo'.substr(start, length)
* 'yyyyyyy'.replace('y', 'a')
    * /!\ only the first occurence
    * 'yyyyyyy'.replace(/y/g, 'a')
* str.trim()
* str.match()
* str.length

# Number

* NaN, Infinity
    * NaN !== NaN
    * Number.isNaN(x) // ES6/2015
* 0.1 + 0.2
* toto.toFixed(2)
* Math.PI.toFixed(3)
* Math.PI.toString()

* Math pour une collection de fonctions pour faire des maths.
* Math.random()
* Math.sqrt(x)
* Math.pow(num, exp)
* Math.hypot(a, b, c) (ES6) // Math.sqrt( a*a + b*b + c*c )
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

(montrer objets.js)

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

# Array

```js
var arr = [12, 65, 546];

console.log(arr[0])
console.log(arr.length)

arr.forEach(function(e, i, a){
  console.log(e, i, a)
})
```

* a.map(f)

```js
var arr = [12, 65, 546];
var arr2 = arr.map(function(e){ return e*e; });
```

* a.filter(f)
// https://github.com/MyWebIntelligence/MyWebIntelligence/blob/master/common/cleanupURLs.js

* Array.isArray(x)

* a.reduce(function(acc, curr){
    return acc+curr;
}, 0)

* a.slice(debut, fin)

arr
.slice(0, 5)
.forEach(function(e, i, a){
  console.log(e, i, a)
})

Avant Array.prototype.find : 
function find(predicate, arr){
    var found;
    
    return arr.some(function(e){
        if(predicate(e)){
            found = e;
            return true;
        }
        return false;
    })

}




* a.sort(fun)

arr = [...new Set(arr)] // unique (ES6/2015)

# Set/Map (ES6/2015)

* new Set(arr)
s.add(value)
s.has(value)
s.delete(value)

var map = new Map();
// Map : clé (any) => valeur (any)
map.set(key, value)
map.get(key)
map.has(key)
map.delete(key)

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
