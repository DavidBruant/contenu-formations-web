"use strict";

function fetchCommitUrl(page) {
    var url = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=ddd6d8c4072452e98600552370fc6551815f2709&?page='+ page +'&per_page=100';
    return fetch(url).then(function(result) {
        return result.json();
    });
}

export default function getContributors(totalCommits) {
    // Get the number of pages needed for the total number of tweets
    var totalFetches = Math.ceil(totalCommits / 100);
    var fetchPromises = [];

    // Fetch all the pages
    for (var i = 1; i <= totalFetches; i++) {
        fetchPromises.push(fetchCommitUrl(i));
    }

    // Combine all the promises and return one array
    return Promise.all(fetchPromises)
        .then(function(results) {
            return [].concat.apply([], results);
        })
        .catch(function(error) {
            console.log(error);
        });

}
