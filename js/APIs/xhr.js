//<script src="http://s3.amazonaws.com/es6-promises/promise-0.1.1.js"></script>

(function(global){
    'use strict';
    
    global.getContent = function(url){
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', url);
        
        xhr.addEventListener('load', function(){
            if(xhr.status < 400){
                console.log('content from', url, ':', xhr.responseText)
            }
            else{
                throw new Error('Could not get content from '+url);
            }
            
        });
    
        xhr.send();
        
    };
    
    
})(this)

getContent('https://rawgithub.com/DavidBruant/contenu-formations-web/master/tweets.json');