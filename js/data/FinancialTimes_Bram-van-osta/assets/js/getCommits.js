"use strict";

export default function getCommits() {

    var url = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits';

    return fetch(url)
        .then(function(result) {
            return result.json();
        })
        .catch(function(error) {
            console.log(error);
        });

}
