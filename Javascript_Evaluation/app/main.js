"use strict";

import getCommits from './getCommits';

document.addEventListener('DOMContentLoaded', function(){

	getCommits().then(function(commits) {
       console.log(commits);
    });

})