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
* Dépendance non-explicite


# CommonJS (Node.js)

Un seul script@src
````js
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




# AMD (Asynchronous Module Definition)

````js
requirejs(
    ["helper/util", "jQuery.js", "http://momentjs.org/moment.js"],
    function(util, jQuery, moment) {
    
        // export
        return function(){
        
        }
    }
);



````




