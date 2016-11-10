"use strict";

function fetchCommitUrl(page) {
    var url = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=ddd6d8c4072452e98600552370fc6551815f2709&?page='+ page +'&per_page=100';
    return fetch(url).then(function(result) {
        return result.json();
    });
}

export default function getContributors() {
    // var totalFetches = Math.ceil(totalCommits / 100);
    var fetchPromises = [];

    // for (var i = 1; i <= 3; i++) {
    //     fetchPromises.push(fetchCommitUrl(i));
    // }

    fetchPromises.push(fetchCommitUrl(1));

    return Promise.all(fetchPromises)
        .then(function(results) {
            return [].concat.apply([], results);
        })
        .catch(function(error) {
            console.log(error);
        });

}
