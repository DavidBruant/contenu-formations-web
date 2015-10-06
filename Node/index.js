"use strict";

var fs = require('fs');

function readdir(path){
    return new Promise(function(res, rej){
        fs.readdir(path, function(err, files){
            if(err)
                rej(err);
            else
                res(files);
        });
    });
}


readdir(process.argv[2])
    .then(function(files){
        console.log('files', files)
    })
    .catch(function(err){
        console.error('error', err);
    })


var directory = {
    'subdir1': {
        subsubdir1: [],
        subsubdir2: []
    },
    'subdir2': {
        subsubdir3: [],
        subsubdir4: []
    },
    'subdir3': {
        subsubdir5: [],
        subsubdir6: []
    },
};

var f = "file1";

var o = {};
o[f] = [];


function f(){
    return 'yjurpo';
}

function pos(){
    return {
        long: 44.56789,
        lat: 0.45678
    };
}

function list(){
    return [2, 7, 865, 367, -987];
}



var statP = new Promise(function(res, rej){
    // ...
})

Promise.all(statPs)
    .then(function(stats){
        console.log(stats);
    })



JSON.stringify(obj, null, 3)


if(){
    
}

function(){
    
}



















