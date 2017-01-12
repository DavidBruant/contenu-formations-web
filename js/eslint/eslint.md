# Eslint

Outil de vérification de règles simples (syntactiques) sur le code.

Exemples :
* Ne pas oublier le strict mode
* toujours utiliser ===
* https://github.com/airbnb/javascript

## History

JSLint (Douglas Crockford)
=> monolithique

JSHint
=> fork de JSLint configurable

ESLint
=> Nicholas Zakas, on peut rajouter ses propres règles facilement


https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
https://github.com/feross/eslint-config-standard

## install

````
npm install eslint -g
# aller dans un projet (cd ./nia/nia/nia)
# créer .eslintrc avec la commande
eslint --init 
eslint .
# la première fois, `eslint .` liste des centaines ou des milliers d'erreurs 
````

Créer .eslintignore (au même niveau que package.json)
```
node_modules
browserify-bundle.js
```

Il reste une poignée d'erreurs.
Pour chaque "erreur" :
* Décider si on veut que ce soit une erreur ("error"), un warning ("warn") ou ignoré ("off")
* Modifier `.eslintrc` pour configurer eslint selon ce qu'on a décidé avec le nom de la règle.
* Corriger le code
* Continuer jusqu'à ce qu'il n'y ai plus d'erreur


pre-commit hook
watch?

Corriger les problèmes tout seul
````
eslint . --fix
````