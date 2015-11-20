# Eslint

## History


## install

npm install eslint -g

(créer .eslintrc)
eslint --init


Dans .eslintrc, ajouter dans `env`:
`"commonjs": true`


Créer .eslintignore (au même niveau que package.json)
```
node_modules
browserify-bundle.js
```