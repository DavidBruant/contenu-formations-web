// 1. sync
var f = readfile(file);
var g = readfile(file2);
var h = readfile(file3);

combine(f, g, h); // traitement inventé



// 2. Node.js
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


// 2.bis Node.js 2
var f, g, h;

readfile(file, function(err, f){
    readfile(file2, function(err, g){
        readfile(file3, function(err, h){
            combine(f, g, h);
        });
    });
});



// 3. Promise
// https://twitter.com/edouard_lopez/status/527814903693062144
function readfilePromise(f){
    return new Promise(function(resolve){
        readfile(f, function(err, content){
            resolve(content);
        })
    })
}

// 3) Promise
var fP = readfilePromise(file);
var gP = readfilePromise(file2);
var hP = readfilePromise(file3);

var allP = Promise.all([fP, gP, hP])
.then(function(results /* [f, g, h] */){
    var f = results[0];
    var g = results[1];
    var h = results[2];
    return combine(f, g, h);
})
.catch(errorHandler);

/*var timeoutP = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject(new Error('Timeout!'))
    }, 5000)  
})
Promise.race([allP, timeoutP])*/

fP.then(function(f){
    blabla(f)
  }) // 'then' returns a promise for the length
  .catch(function(err){
      //...
  }) // 'catch' returns a promise too
  






define(function(){
    'use strict';
    return function getContents(url){
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
});


// ...

var tweetsP = getContents('http://...');
document._readyP = new Promise(function(resolve, reject){
    document.addEventListener('DOMContentLoaded', function(){ resolve(document) });
});

Promise.all([tweetsP, document._readyP]).then(function(results){
    var tweets = results[0];
});
