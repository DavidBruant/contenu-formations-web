// top level
require([
    "getContents.js",
    "makeTweetOl.js"
], function(getContents, makeTweetOl){
    console.log('lol');
    // code
})

// makeTweetOl.js
define([
    "makeTweetLi.js"
], function(makeTweetLi){
    
    return function(tweets){
        document.createElement('lo')
        // ...
        makeTweetLi(tweet);
    }
})

// getContents.js
define([], function(){
    
    return function(url){
        return new Promise(function(resolve, reject){
            
        })
    }
})

// makeTweetLi.js
define([], function(){
    
    return function(tweet){
        document.createElement('li');
    }
})