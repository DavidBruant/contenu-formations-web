"use strict";

import * as d3 from 'd3-shape';


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

		const weekArray = [];
		createCharts(weekDays, commits, chartContainer, weekArray);

		const arcs = d3.pie()(weekArray);

		arcs.forEach(arcProps => {
			const arcG = document.createElement('g');
			arcG.classList.add('arc');
			const arcGPath = document.createElement('path');
			chartContainer.appendChild(arcG);

			const arc = d3.arc({arcProps});

			arcGPath.setAttribute('d', arc);

			console.log(arcProps);
		});
	});
});