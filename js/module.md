# Modules

## History

* CommonJS (oublié)
* AMD (require.js)
* CommonJS (~Node.js)

https://github.com/substack/browserify-handbook#bundling-commonjs-server-side


## CommonJS modules with browserify

```
npm init
npm install browserify -g
# npm install watchify -g
npm i rollupify --save 

browserify main.js -o browserify-bundle.js -t rollupify -d -v
```


index.html devient
<script defer src="browserify-bundle.js"></script>


// main.js
```js
import getContents from './getContents.js';

```


// getContents.js
````js
export default function(url){
    return new Promise(function(){

    })
};

````


## React

```
npm install react react-dom --save
```

(télécharge react dans `node_modules`, et garder une mention dans le package.json)




## minifier

npm install minifyify --save
browserify -p [minifyify --no-map] main.js -o bundle.js

export NODE_ENV="production"

{
    "scripts": {
        "build:dev": "browserify main.js > bundle.js", // 800k
        "build:prod": "browserify -p [minifyify --no-map] main.js > bundle.js", //350k
        // 288k avec NODE_ENV="production"
    }
}

npm run build:dev
npm run build:prod








