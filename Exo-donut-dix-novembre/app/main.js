"use strict";

import * as d3 from 'd3-shape';


import getCommits from './getCommits';
import createCharts from './createCharts';

document.addEventListener('DOMContentLoaded', () =>{
	
	const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svgContainer.setAttribute('width', '960');
	svgContainer.setAttribute('height', '500');

	const chartContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
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
			const arcG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
			arcG.classList.add('arc');
			const arcGPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			const arcGText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			arcGText.textContent = arcProps.data;

			const arc = d3.arc()
						  .innerRadius(70)
						  .outerRadius(200)
						  .startAngle(arcProps.startAngle)
						  .endAngle(arcProps.endAngle);

			const hue = Math.floor(Math.random() * 100) + 1; 

			arcGPath.setAttribute('d', arc());
			arcGPath.setAttribute('style', `fill:hsl(${hue}, 70%, 50%)`);

			const textPosition = arc.centroid((arc.startAngle+arc.endAngle)/2, (70+200)/2);

			console.log(textPosition[0] + ',' + textPosition[1]);

			arcGText.setAttribute('transform', 'translate('+textPosition[0] + ',' + textPosition[1]+')');

			arcG.appendChild(arcGPath);
			chartContainer.appendChild(arcG);
			arcG.appendChild(arcGText);
		});
	});
});