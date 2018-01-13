# A l'ancienne

````html
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

* Performance (limite de nombre de requêtes HTTP en parallèle (6))
* Dépendances entre les scripts sont implicites

## Aparté

Les différents morceaux de code d'une application dépendent les uns des autres. Mais en JavaScript, ces dépendances étaient **implicites**.
On rend les dépendances explicites afin de savoir exactement quel est le code qu'on doit chargé dans la page.
Ce n'est pas une liste de fichiers. C'est l'ensemble des fichiers que l'on peut atteindre par lien de dépendance à partir du point d'entrée. 



# CommonJS (Node.js)

Un seul `<script>`

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

https://github.com/substack/browserify-handbook#bundling-commonjs-server-side


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
import {arc, pie} from 'd3-shape'; // arc
// import * as d3 from 'd3-shape'; // d3.arc


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
npm i babel-core babelify babel-preset-es2015 --save 

browserify main.js -o bundle.js -t [ babelify --presets [ es2015 ] ] -d
# watchify main.js -o bundle.js -t [ babelify --presets [ es2015 ] ] -d -v
```

## changer le HTML

Enlever tous les <script> et les remplacer par `<script defer src="bundle.js"></script>`

## Etape 2

`main.js`

````js
import createTweetsOl from './createTweetsOl.js';
import createTimeButton from './createTimeButton.js';

document.addEventListener('DOMContentLoaded', function(){
    // ... createTweetsOl() ...
    // ... createTimeButton() ...
});
````

`createTweetsOl.js`

````js
export default function(tweets){
    // ...
}
````


## Etape 3

(rajouter la date dans l'affichage)

https://www.npmjs.com/

```bash
npm install moment --save 
# regarder package.json
```

```js
import moment from 'moment';

// ...

moment(t.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').fromNow()
```


# NPM tasks

Remplace grunt/gulp la plupart du temps

* http://substack.net/task_automation_with_npm_run
* https://gist.github.com/oncletom/1e233f2100c4e0877922
* http://naholyr.fr/2015/11/ecrire-des-scripts-npm-multi-plateforme/

```bash
npm run build:dev
npm run build:prod
```

* https://www.npmjs.com/package/npm-run-all
* https://www.npmjs.com/package/watch-exec

Exemple : https://github.com/dtc-innovation/dataviz-finances-gironde/blob/master/package.json

## Minifier

```bash
npm install minifyify --save
browserify -p [minifyify --no-map] main.js -o bundle.js

export NODE_ENV="production"
```

```json
{
    "scripts": {
        "build:dev": "browserify main.js > bundle.js",
        "build:prod": "browserify -p [minifyify --no-map] main.js > bundle.js"
    }
}
```

