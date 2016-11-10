import moment from 'moment';
import getCommits from './getCommits';
export default function getDay() {

getCommits().then(function(commits) {

var commitsByDay = {
                'Monday': [],
                'Tuesday': [],
                'Wednesday': [],
                'Thursday': [],
                'Friday': [],
                'Saturday': [],
                'Sunday': []
            };

            commits.forEach(function(commit) {
                var commitDayFormatted = moment(commit.commit.author.date);
                var commitDayOfWeek = commitDayFormatted.format('dddd');

                commitsByDay[commitDayOfWeek].push(commit);
            });
            console.log(commitsByDay);
            return commitsByDay;
});
}
