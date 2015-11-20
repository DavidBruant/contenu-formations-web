# Modules


## History

* AMD (require.js)
* CommonJS (~Node.js)

https://github.com/substack/browserify-handbook#bundling-commonjs-server-side


## CommonJS modules with browserify

```
npm init
npm install browserify -g
npm install watchify -g

browserify main.js -o browserify-bundle.js -d -v
```


index.html devient
<script defer src="browserify-bundle.js"></script>


// main.js
```js

var getContents = require('./getContents.js'); // import


```


// getContents.js
````js

// export
module.exports = function(url){
    return new Promise(function(){
    
    
    })

};

````


## React

```
npm install react react-dom --save
```

(télécharge react dans `node_modules`, et garder une mention dans le package.json)



## Polyfills

```bash
npm i es6-shim --save
```

```js
require('es6-shim'); // no need to get the result in a variable
```
