"use strict";

// import getContributors from './getContributors';
import getCommits from './getCommits';
import orderCommitsByDay from './orderCommitsByDay';
import formatCommitDataForChart from './formatCommitDataForChart';
import generateDonutChart from './generateDonutChart';

document.addEventListener('DOMContentLoaded', function () {

    // getContributors().then(function (contributors) {
    //     var totalCommits = 0;
    //
    //     contributors.forEach(function (contributor) {
    //         totalCommits += contributor.contributions;
    //     });
    // });

    getCommits().then(function(commits) {
        var commitsByDay = orderCommitsByDay(commits);
        var formattedData = formatCommitDataForChart(commitsByDay);
        console.log(formattedData);

        var svg = generateDonutChart(formattedData);
        document.body.appendChild(svg);
    });

});