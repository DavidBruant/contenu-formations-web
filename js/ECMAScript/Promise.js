// sync
var f = readfile(file);
var g = readfile(file2);
var h = readfile(file3);

combine(f, g, h);

// Node.js
var f, g, h;

readfile(file, function(err, _f){
    f = _f;
    if(f && g && h)
        combine(f, g, h);
});
readfile(file2, function(err, _g){
    g = _g;
    if(f && g && h)
        combine(f, g, h);
});
readfile(file3, function(err, _h){
    h = _h;
    if(f && g && h)
        combine(f, g, h);
});

// Node.js 2
var f, g, h;

readfile(file, function(err, f){
    readfile(file2, function(err, g){
        readfile(file3, function(err, h){
            combine(f, g, h);
        });
    });
});


// Promise
var fP = readfile(file);
var gP = readfile(file2);
var hP = readfile(file3);

Promise.all(fP, gP, hP)
    .then(function(results){
        combine.apply(undefined, results);
    })
    .catch(errorHandler);

fP.then(function(f){
    
  })
  .catch(function(err){
      //...
  })





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
