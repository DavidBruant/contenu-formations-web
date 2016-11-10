"use strict";

// import getContributors from './getContributors';
import getCommits from './getCommits';

document.addEventListener('DOMContentLoaded', function () {

    // getContributors().then(function (contributors) {
    //     var totalCommits = 0;
    //
    //     contributors.forEach(function (contributor) {
    //         totalCommits += contributor.contributions;
    //     });
    // });

    getCommits().then(function(commits) {
        console.log(commits);
    })

});