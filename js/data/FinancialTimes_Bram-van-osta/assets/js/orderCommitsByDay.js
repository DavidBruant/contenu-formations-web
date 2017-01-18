"use strict";

import moment from 'moment';

export default function orderCommitsByDay(commits) {

    var commitsByDay = {
        'Monday': [],
        'Tuesday': [],
        'Wednesday': [],
        'Thursday': [],
        'Friday': [],
        'Saturday': [],
        'Sunday': []
    };

    // Transform the date format and group the commits by day of week
    commits.forEach(function(commit) {
        var commitDayFormatted = moment(commit.commit.committer.date);
        var commitDayOfWeek = commitDayFormatted.format('dddd');

        commitsByDay[commitDayOfWeek].push(commit);
    });

    return commitsByDay;

}