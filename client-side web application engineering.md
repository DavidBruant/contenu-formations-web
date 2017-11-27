# Client-side Web Application Engineering

This document attempts to describe the evolution of Client-side Web Application Engineering practices over time.


## Pre-history - no JS

At the beginning of the web, a web application was only composed of HTML pages and CSS to style them (as well as other resources like fonts and images). To interact with the application, one had to click on links (HTML &lt;a> element) or submit forms (HTML &lt;form> element). This would send an information to the server which would return a new HTML page either static or dynamically generated (with a "server-side language" like PHP)


## The good old days - scripts

Applications started being built as a serie of JavaScript scripts that were included in the HTML page

````html
<script src="1.js"></script>
<script src="2.js"></script>
<script src="3.js"></script>
<script src="4.js"></script>
<script src="5.js"></script>
````

### Pros

* **Easy to write**
* **Percieved performance**
    * Content is in HTML and displayed right away by the browser and JavaScript only adds interactivity

### Cons

* **Dependency between scripts is implicit**
    * it's very hard to know when it's safe to remove a script
* **Quantifiable Performance**
    * Browsers typically only make 6 parallel requests to the same domain, so the delay before the application starts is strongly corrolated to the number of included scripts

### Improvements

#### Script concatenation

A tool that takes a set of scripts and bundles them together. Only one script is included which removes the correlation between the number of source scripts and delay before start.


## Single-Page Application (SPA) with empty &lt;body/>

### Aside on modules 

SPAs typically have a module system (typically AMD with requirejs or CommonJS with browserify). One of the benefits of a module system is that dependencies between scripts is explicit. The `main.js` script requires `x.js`, `y.js` and `z.js`; `x.js` requires `x1.js` and `x2.js`, etc.

AMD could acquire dependencies asychronously which led to the unfortunate characteristics that, used naively, the application could not start before (`dependency tree depth`*`latency`) whic resulted in an unhealthy dependency between code maintainability and performance. `r.js` was created to work around this problem by bundling all modules into one script.

AMD syntax was considered cumbersome and proponents of CommonsJS came to the conclusion that given a tool is needed anyway, it might as well be a tool that bundles CommonJS modules (interoperability with npm was a strong incentive).

> FIND QUOTE


### Aside on the URL bar 

Changing the state of the web page based on JavaScript after user interactions
History API


### Empty &lt;/body>


### cons

* 3 round-trips before content is visible and interactive (HTML, JS, data)


## Isomorphic applications with HTML templates

Give example maybe with TodoApp


## Isomorphic applications "with React"

Composant ("createTweetsOl.js") :

```js

import favTweet from './favTweet'

export default function(tweets){

    return element('ol', {}, tweets.map(function(t){
        return element('li', {},
            element('span', {}, t.user.name),
            element('span', {}, t.created_at),
            element('span', {}, t.text),
            element('button', {
                onClick: function(e){
                    console.log('on a cliqué sur', t);
                    favTweet(t);
                }
            }, 'Fav !')
            
        )
    }))
}

```




