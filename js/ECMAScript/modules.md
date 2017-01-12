# A l'ancienne

````
<!doctype html>
<html>
    <head>
        <script src="code1.js"></script>
        <script src="code2.js"></script>
        <script src="code3.js"></script>
        <script src="code4.js"></script>
        <script src="code5.js"></script>
        <script src="code6.js"></script>
    </head>
    <body></body>
</html>
````

Problèmes :

* performance (limite de nombre de requêtes HTTP en parallèle)
* Dépendances entre les scripts sont non-explicite

## Aparté

Les différents morceaux de code d'une application dépendent les uns des autres. Mais en JavaScript, ces dépendances étaient **implicites**.
On rend les dépendances explicites afin de savoir exactement quel est le code qu'on doit chargé dans la page.
Ce n'est pas une liste de fichiers. C'est l'ensemble des fichiers que l'on peut atteindre par lien de dépendance à partir du point d'entrée. 



# CommonJS (Node.js)

Un seul script@src
````js
"use strict";

var dep1 = require('dep1.js')
var dep2 = require('dep2.js')

// code

module.exports = function(a){
    var h = dep1(48);
    return h + dep2(a);
};

````

Problème :
* require synchrone


// https://github.com/substack/browserify-handbook#bundling-commonjs-server-side


## Noms des modules CJS

````js
"use strict";

var dep1 = require('blabla') // module natif node ou installé
var dep2 = require('./blabla.js') // fichier local au projet

module.exports = function(){

}
````



# AMD (Asynchronous Module Definition)

````js
define(
    ["helper/util", "jQuery.js", "http://momentjs.org/moment.js"],
    function(util, jQuery, moment) {
    
        // export
        return function(){
        
        }
    }
);
````
// https://github.com/MapContrib/MapContrib/blob/1f33a525fbc95fe0bb82fe86da517be5e0760ee6/src/public/js/view/main.js

Problème : 
* Nombre d'A/R égal à la profondeur de l'arbre.

Solution : r.js https://github.com/requirejs/r.js


# ES6/2015

C'est comme ça qu'on définit un module

````js
// un module importe d'autres modules 
import React from 'React';
import createTweetsOl from './createTweetsOl';

// ...

// un module exporte quelque chose
export default function(){
    // ....
}
````

Quand on importe un module, on "récupère" ce que ce module exporte.
Le module "point d'entrée" n'exporte rien. Les modules "feuilles" n'importe rien.

# TODO

On utilise un outil qui s'appelle browserify afin de créer un "bundle" qui sera le seul (gros) script qu'on l'on charge (script@src) à partir du module d'entrée.

* installer Node.js (installe npm aussi)

```bash
# dans le dossier projet :
npm init -y
npm install browserify -g
# npm install watchify -g
npm i rollupify --save 

browserify main.js -o bundle.js -t rollupify -d
# watchify main.js -o bundle.js -t rollupify -d -v
```

changer HTML:
* enlever tous les <script> et les remplacer par 
<script defer src="bundle.js"></script>

Etape 1 :
* créer un main.js (pas de dépendance)


Etape 2 :
main.js:
````js
import createTweetsOl from './createTweetsOl.js';
import createTimeButton from './createTimeButton.js';

document.addEventListener('DOMContentLoaded', function(){
    // ... createTweetsOl() ...
    // ... createTimeButton() ...
});
````

createTweetsOl.js
````js
export default function(tweets){
    // ...
}
````





Etape 3 :

```bash
npm install moment --save 
# regarder package.json
```

```js
import moment from 'moment';

// ...

moment(t.created_at).fromNow()

```
https://www.npmjs.com/
https://npms.io/





