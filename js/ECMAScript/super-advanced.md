## Booleans


* `67 && 37 && null && 'kjhg'`
    * => null (première valeur "falsy")
* `67 && 37 && 'kjhg'`
    * => 'kjhg' (dernière valeur "truthy")
* `0 || 37 || null`
    * => 37 (première valeur "truthy")
    * `Number.isNaN = Number.isNaN || function(x){return x!==x};`

Valeur par défaut pour les arguments :

```js
function(b){
    b = b || 45
    return b * 7;
}
```

## Héritage prototypal

http://davidbruant.github.io/ObjectViz/

## Différences entre un array et un object "normal" en JavaScript

* Syntaxe de création

`{a: 1}` vs `['yo', 'ya', 'yi']`

* Les arrays ont une propriété `length` magique
* `Array.isArray(x)`


## arr.reduce

## chainage de map et filter

https://github.com/MyWebIntelligence/MyWebIntelligence/blob/master/common/cleanupURLs.js

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