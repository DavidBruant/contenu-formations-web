"use strict";

export default function getCommits(){


  var listCommits = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=e48e26b4256a29c0aa2eaaf21412fb3d5c74b298&?page=1&per_page=300';



  var commits = fetch(listCommits)
     .then(function(result) {
         return result.json();
     });
return commits;
}
