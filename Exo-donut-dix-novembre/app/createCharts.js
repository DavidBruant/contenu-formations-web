import moment from 'moment';

export default function createCharts(weekDays, commits){
	weekDays.forEach(day =>{
			
		const dailyCommits = commits.filter(commit => moment(commit.commit.author.date).format('dddd') === day);

		const dailyCommitsNumber = dailyCommits.length;

		console.log(dailyCommitsNumber);
	});
};