require([
    'getContents.js',
    'tweetCollection.js'
], function(getContents, createTweetCollection){
    'use strict';
    
    console.log('inc', document.getElementById('inc'));

    var dataP = getContents('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json');

    //document.addEventListener('DOMContentLoaded', function(){
        

        dataP.then(function(data){
            console.log(data);

            // ...

            li.addEventListener('click', function(e){
                e.target.classList.toggle('expanded');
            })
        });
        
        
   // });
})

