"use strict";

import getCommits from './getCommits.js';
import getCommitDay from './getCommitDay.js';
import createDonuts from './createDonuts.js';

document.addEventListener('DOMContentLoaded', function(){

  var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  var donuts = [];

  getCommits().then(function(commits){
    week.forEach(function(e){
      donuts.push(getCommitDay(commits, e));
    });

    createDonuts(donuts, week);

  });
});
