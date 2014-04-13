function getContents(url){
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
}

// ...

var tweetsP = getContents('http://...');
document._readyP = new Promise(function(resolve, reject){
    // ...
});

Promise.all([tweetsP, document._readyP]).then(function(results){
    var tweets = results[0];
});


/*
someP.then(function(tweets){
        var userId = tweets[0].userId;
    
        return getUser(userId);
    })
    .then(function(user){
    
    })
    .catch(function(){
        
    });*/

// refactor getContent pour retourner une promesse
// créer une promesse (dans document._readyP) qui se résoud quand le document est prêt (DOMContentLoaded)
// executer les traitements quand les deux promesses sont résolues (Promise.all)
