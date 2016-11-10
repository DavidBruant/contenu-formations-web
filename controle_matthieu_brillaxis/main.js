"use strict";

import getCommits from './getCommits';

document.addEventListener('DOMContentLoaded', function(){
    getCommits().then(function(commits) {
        commits.forEach(function(commit) {
            console.log(commit);
        });
    });

});