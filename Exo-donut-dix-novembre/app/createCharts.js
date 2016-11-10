import moment from 'moment';
import * as d3 from 'd3-shape';


export default function createCharts(weekDays, commits, container, weekArray){
	weekDays.forEach(day =>{
			
		const dailyCommits = commits.filter(commit => moment(commit.commit.author.date).format('dddd') === day);

		const dailyCommitsNumber = dailyCommits.length;

		weekArray.push(dailyCommitsNumber);

	});
};