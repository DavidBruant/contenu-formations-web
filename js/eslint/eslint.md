# Eslint

## History

JSLint (Douglas Crockford)
JSHint
ESLint


## install

````
npm install eslint -g
eslint --init # (créer .eslintrc)
eslint .
````

Créer .eslintignore (au même niveau que package.json)
```
node_modules
browserify-bundle.js
```


pre-commit hook
watch?

Corriger les problèmes tout seul
````
eslint . --fix
````