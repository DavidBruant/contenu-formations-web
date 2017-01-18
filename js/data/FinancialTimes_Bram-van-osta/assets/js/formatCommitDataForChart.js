"use strict";

export default function (commitsByDate) {

    return Object.keys(commitsByDate).map(function(day) {
        return {
            'label': day,
            'count': commitsByDate[day].length
        };
    });

}