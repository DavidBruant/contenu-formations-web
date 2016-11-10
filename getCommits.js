"use strict";

export default function getCommits() {
    // GET /repos/:owner/:repo/commits
    var commits = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits')
    .then(function(result) { 
        return result.json();
    });
    console.log(commits);

    return Promise.all([commits])
    .then(function(resp){
        return resp[0];
    })
    .catch(function(e){
        console.error(e);
    });
}