"use strict";

import getCommits from './getCommits';
import createCharts from './createCharts';

document.addEventListener('DOMContentLoaded', () =>{
	
	const svgContainer = document.createElement('svg');
	svgContainer.style.width = '960px';
	svgContainer.style.height = '500px';

	const chartContainer = document.createElement('g');
	chartContainer.setAttribute('transform','translate(480,250)');

	svgContainer.appendChild(chartContainer);

	document.body.appendChild(svgContainer);

	getCommits()
	.then(commits =>{
		
		const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		createCharts(weekDays, commits, chartContainer);
	});
});