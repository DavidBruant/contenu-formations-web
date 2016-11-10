import moment from 'moment';
import shape from 'd3-shape';


export default function createCharts(weekDays, commits, container){
	weekDays.forEach(day =>{

		const arcG = document.createElement('g');
		arcG.classList.add('arc');
			
		const dailyCommits = commits.filter(commit => moment(commit.commit.author.date).format('dddd') === day);

		const dailyCommitsNumber = dailyCommits.length;

		console.log(dailyCommitsNumber);

		container.appendChild(arcG);
	});
};