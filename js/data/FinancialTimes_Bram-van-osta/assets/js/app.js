"use strict";

import getContributors from './getContributors';
import getCommits from './getCommits';
import orderCommitsByDay from './orderCommitsByDay';
import formatCommitDataForChart from './formatCommitDataForChart';
import generateDonutChart from './generateDonutChart';

document.addEventListener('DOMContentLoaded', function () {

    // Start by getting all the contributors to find out the total number of commits
    getContributors().then(function (contributors) {
        var totalCommits = 0;

        // Get the total number of commits
        contributors.forEach(function (contributor) {
            totalCommits += contributor.contributions;
        });

        // Get the commits
        getCommits(totalCommits).then(function(commits) {
            var commitsByDay = orderCommitsByDay(commits);
            var formattedData = formatCommitDataForChart(commitsByDay);
            console.log(formattedData);

            var svg = generateDonutChart(formattedData);
            document.body.appendChild(svg);
        });
    });

});