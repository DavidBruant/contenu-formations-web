
(function(global){
    'use strict';
    
    global.getContent = function(url){
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.addEventListener('load', function(){
                if(xhr.status < 400)
                    resolve(JSON.parse(xhr.responseText));
                else
                    reject('Could not get content from '+url);
            });
            xhr.send();
        });
    };
    
    
})(this)

getContent('https://rawgithub.com/DavidBruant/contenu-formations-web/master/tweets.json');