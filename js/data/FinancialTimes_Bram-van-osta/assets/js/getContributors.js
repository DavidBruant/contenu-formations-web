"use strict";

export default function getContributors() {
    var url = 'https://api.github.com/repos/Financial-Times/polyfill-service/contributors?per_page=100';

    return fetch(url)
        .then(function(result) {
            return result.json();
        })
        .catch(function(error) {
            console.log(error);
        });

}
