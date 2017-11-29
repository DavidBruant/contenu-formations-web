"use strict";

console.clear();

function jsonFetch(url){
  return fetch(url).then(r => r.json());
}

{
  const url = 'https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json';
  const url2 = 'https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json';

  const tweetsP = jsonFetch(url);
  const tweets2P = jsonFetch(url2);
  
  tweetsP.then(function(tweets){
    console.log('ts', tweets)
  });
  .catch(function(err){
    console.error('Tiens, une erreur ici !', err);
  })
  
  tweetsP.catch(function(err){
    console.error('Aaaaaah une erreur !', err);
  });
  
  const allP = Promise.all([ tweetsP, tweets2P ])
  
  allP.then(function([tweets, tweets2]){
    console.log(tweets.length, tweets2.length)
    
    const allTweets = tweets.concat(tweets2);
    
    console.log(allTweets.length)
  })
  .catch(function(err){
    console.error('Aaaaaall une erreur !', err);
  })
  
  
  
  /*const tweetHTTPRespP = fetch(url);
  
  tweetHTTPRespP
    .then(function(resp){
      //console.log('resp', resp);
      const bodyJSON = resp.json();
      //console.log('bodyJSON', bodyJSON);

      bodyJSON
        .then(function(body){
          console.log('body', body);
        })
    })*/
  
  // équivalent
  
  /*
  tweetHTTPRespP
    .then(function(resp){
      console.log('resp', resp);

      const bodyJSON = resp.json();

      console.log('bodyJSON', bodyJSON);

      return bodyJSON
    })
    .then(function(body){
      console.log('body', body);
    })
  */
  
  
  
  
  
}