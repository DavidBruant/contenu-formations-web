"use strict";

export default function getCommits() {
    // GET /repos/:owner/:repo/commits
    var commits1 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=703ebc40859982197958bdad4f90912950a54a4a&?page=1&?per_page=100')
    .then(function(result) { 
        return result.json();
    });

    var commits2 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=703ebc40859982197958bdad4f90912950a54a4a&?page=2&?per_page=100')
    .then(function(result) { 
        return result.json();
    });

    var commits3 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=703ebc40859982197958bdad4f90912950a54a4a&?page=3&?per_page=100')
    .then(function(result) { 
        return result.json();
    });
    

    return Promise.all([commits1, commits2, commits3])
        .then(function(resp){
    return resp[0].concat(resp[1]).concat(resp[2]);
    })
    .catch(function(e){
        console.error(e);
    });
}