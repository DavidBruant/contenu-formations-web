"use strict";

import moment from 'moment';
import getCommits from './getCommits';
import * as d3 from 'd3-shape';

export default function drawDonuts() {

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '900');
    svg.setAttribute('height', '900');
    svg.setAttribute('style', 'border: 1px solid black');
    document.body.appendChild(svg);

    // getCommits().then(function(commits) {

    //         var commitsByDay = {
    //             'Monday': [],
    //             'Tuesday': [],
    //             'Wednesday': [],
    //             'Thursday': [],
    //             'Friday': [],
    //             'Saturday': [],
    //             'Sunday': []
    //         };

    //         commits.forEach(function(commit) {
    //             var commitDayFormatted = moment(commit.commit.author.date);
    //             var commitDayOfWeek = commitDayFormatted.format('dddd');

    //             commitsByDay[commitDayOfWeek].push(commit);
    //         });

    //         console.log(commitsByDay.Monday.length);
    // });


};