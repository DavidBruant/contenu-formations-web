# Bases

* S'execute dans le navigateur, côté client.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview

* A quoi sert JavaScript (examples)

# Standards

Le langage a des pièges, voici comment fonctionnent les standards:
- TODO

https://www.youtube.com/watch?v=7eNFQqMSxtU

- ECMAScript 3 (1999)
    - IE8+
- Pas de ECMAScript 4 !
- ECMAScript 5 (2009)
    - strict mode
    - JSON
- ECMAScript 6 / 2015
    - Destructuring
    - Modules standards
    - Arrow function
    - Map/Set/WeakMap/WeakSet
    - Promise
    - Array.prototype.find
- ECMAScript 2016
    - Array.prototype.includes
- ECMAScript 2017
    - async/await
- ECMAScript un jour
    - SharedArrayBuffer ?
    - BigInt ?
- ...

Les versions de JavaScript (1.7, 1.7.5, 1.8, etc.) n'existent pas (ce sont numéros de version du moteur JS de Firefox)

Ce qui nous intéresse vraiment en tant que dévs :

- https://kangax.github.io/compat-table/es6/
- http://node.green/

# Syntaxe

* not: `!x`
* et: `a && b`
* ou: `a || b`

* `a = b`
* `a = a+y`
    * `a += y`
* `a = a+1`
    * `a++`
* `Object.prototype.toString.c`

````js
if(x){
    // x === true
}
else{
    // x === false
}
````


# Variables

- Toujours déclarer avec `const` ou `let` (IE11+. Anciennement `var`)
- Toujours utiliser le mode strict `"use strict";`

- [How One Missing `var` Ruined our Launch](http://www.pixelstech.net/article/1320253282-How-One-Missing-%60var%60-Ruined-our-Launch)
- [Transitionner du code existant vers le strict mode](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode/Transitioning_to_strict_mode)

````js
"use strict";
const a = 1;

b = 2; // INTERDIT ! (mais pas grave)

function c(d){
    const e = 45;
    f = "zertu"; // INTERDIT !

    return e + d + a;
}

function g(){
    let f; // undefined
    console.log('yo');
    f = "zertu"; // Pas d'prob !

    return f;
}
````

# Fonctions

- Défintion d'une fonction 
- Arguments
- Valeur de retour
- Appel d'une fonction



# Le code du futur dans les navigateurs du présent

- Syntaxe : façon d'écrire le code comprise (ou pas) par les navigateurs 
    - règles de grammaire
- Runtime : fonctions fournies par le navigateur (ou Node.js) 
    - sémantique pour des mots nouveaux

## Syntaxe - babel

Babel https://babeljs.io/

## Runtime - polyfills

Si vous utilisez des fonctions du futur sans polyfills, ces fonctions ne seront pas définies sur les vieux navigateurs.

Bibliothèque qui implémente un standard

- [polyfill.io](https://cdn.polyfill.io/v2/docs/)
- [post de blog d'annonce](http://labs.ft.com/2014/09/polyfills-as-a-service/)

````
1) rajouter les polyfills
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,Promise"></script>

2) code métier
````

Le fait qu'une fonction ne soit pas implémentée par un navigateur n'est pas une raison pour ne pas utiliser cette fonction.


# Valeurs

| type          | Exemples                        | typeof x    | Bon test          |
|---------------|---------------------------------|-------------|-------------------|
| boolean       | `true`, `false`                 | "boolean"   |                   |
| string        | `''`, `"yo !"`, `` `whatever` `` | "string"   |                   |
| number        | `1`, `-2.3`, `NaN`, `Infinity`  | "number"    |                   |
| undefined     |                                 | "undefined" |                   |
| null          |                                 | ⚠ "object"  | `x === null`      |
| symbol (ES2015) |                               | "symbol"    |                   |
| simple object | `{}`, `{a:1, b: "2"}`           | "object"    | `Object(x) === x` | 
|---------------|---------------------------------|-------------|-------------------|
| function      | `function somme(a, b){return a+b;}` | ⚠ "function" |              |
| array         | `[]`, `[1, 76, 87]`             | ⚠ "object"  | `Array.isArray(x)` |
| set, map, weakmap, promise, date, regexp  |     |  "object"   | `Object.prototype.toString.call(x)` | 


# Comparaison

Toujours utiliser === et !==

- `==` "presque égal"
- `===` "strict égal"
- `Object.is`

http://dorey.github.io/JavaScript-Equality-Table/

Comparaison par référence pour les objets, par valeur pour le reste.

````js
'use strict';

(1 === 1)
('yo' === 'yo')

const o = {
    a: 1
};

const o2 = o;

console.log(o === o2); // true


const o3 = {
    a:1
}

console.log(o === o3) // false

o2.b = 24;
console.log(o.b) // 24
````

## Exception

* `NaN` => `Number.isNaN`


# Strings

* `'Yo'.slice(start, end)`
* `'Yo'.substring(start, end)`
* `'Yo'.substr(start, length)`
* `str.trim()`
* `'yyyyyyy'.replace('y', 'a')`
    * /!\ only the first occurence
    * `'yyyyyyy'.replace(/y/g, 'a')`
* `str.match(regexp)`
    * https://regexper.com/
    * https://regex101.com/
* `str.length`

[Enlever les accents](https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463)

# Number

* `NaN`, `Infinity`
    * `NaN !== NaN`
    * `Number.isNaN(x)` // ES6/2015
* `0.1 + 0.2`
    * [Faire des maths précises avec bignumber](https://www.npmjs.com/package/bignumber.js)

```js
const e = 2.71828182846;

console.log( e.toFixed(3) )

console.log( e.toString() )
console.log( e.toString(2) )
console.log( e.toString(36) )
```

Math pour une collection de fonctions pour faire des maths.
* `Math.random()`
* `Math.round/floor/ceil`

# Booleans

* `!!maValeur`

## "Falsy values"

```js
false
0
NaN
'' (chaîne vide)
null
undefined
```


# Objects

"un objet c'est une armoire"

* propriété : clé (string) -> valeur (any)

(formation pas-avancée : montrer [objets.js](./objets.js))

- Lire une propriété `o.a`
    - `o["a"]` équivalent à `o.a`
- Assigner une valeur à une propriété`o.a = 12`
- Supprimer une propriété `delete o.a;`
- Lister les propriétés de l'objet `Object.keys(o)`
- Tester si une propriété est dans un objet `'yo' in obj`


# JSON

JSON : JavaScript Object Notation

[Origine](https://www.json.org/)

Format d'échange (manière de sérialiser des données structurées)

- `JSON.stringify(obj) => string`
- `JSON.parse(string) => obj`

exemple de cycle :

````js
"use strict";

const o = {
  a: 1,
  bloublou: 9,
  chapito: "yo",
  brave: {
    autre: "object"
  }
}

const o2 = {
  a: o
};

o.stylo = o2

console.log(JSON.stringify(o))
````

# Array

```js
"use strict";

console.clear()

const arr = [12, 65, 546];

console.log('mon tableau', arr[0], arr.length)

arr.forEach(function(e){
  console.log(e, e+27)
})

for(let e of arr){
  console.log(e, e+27)
}
```


## Utilisation des tableaux

https://twitter.com/steveluscher/status/741089564329054208

* `a.map(f)`

```js
const arr = [12, 65, 546];
const arr2 = arr.map(function(e){ return e*e; });
```

* `a.filter(f)`

```js
const arr = [12, 2, 76, 65, 545, 98, 57, 34];
const arr2 = arr.filter(function(e){ return e%2 === 0; });
```

* `a.slice(debut, fin)`

````js
arr
.slice(0, 5)
.forEach(function(e, i, a){
  console.log(e, i, a)
})
````

* `a.find(pred)`

````js
const found = arr.find(function(e){
    return e >= 1000 && e%27 === 13;
})
````

* `a.sort(fun)`

`arr = [...new Set(arr)]` // tableau des éléments unique (ES6/2015)
ou https://lodash.com/docs/4.17.4#uniq


# Set/Map

````js
const s = new Set(arr)
s.add(value)
s.has(value)
s.delete(value)
````

````js
const map = new Map();
// Map : clé (any) => valeur (any)
map.set(key, value)
map.get(key)
map.has(key)
map.delete(key)
map.keys() // iterator
````

````js
const wm = new WeakMap();
wm.set(key, value)
wm.get(key)
wm.has(key)
wm.delete(key)
// pas de .keys(), on ne peut pas itérer sur une WeakMap
````






