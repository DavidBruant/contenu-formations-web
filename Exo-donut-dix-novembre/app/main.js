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

		// Returns arcs
		const arcs = createCharts(weekDays, commits);

		arcs.forEach(arcProps => {
			// Creating DOM Nodes for each arcs
			const arcG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
			const arcGPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			const arcGText = document.createElementNS('http://www.w3.org/2000/svg', 'text');

			// Adding class to each
			arcG.classList.add('arc');

			// Creating arcs
			const arc = d3.arc()
						  .innerRadius(70)
						  .outerRadius(200)
						  .startAngle(arcProps.startAngle)
						  .endAngle(arcProps.endAngle);

			arcGPath.setAttribute('d', arc());

			// Adding random color
			const hue = Math.floor(Math.random() * 100) + 1; 
			arcGPath.setAttribute('style', `fill:hsl(${hue}, 70%, 50%)`);


			// Handling text
			arcGText.textContent = arcProps.data;
			const textPosition = arc.centroid((arc.startAngle+arc.endAngle)/2, (70+200)/2);
			arcGText.setAttribute('transform', 'translate('+textPosition[0] + ',' + textPosition[1]+')');

			// Append to the DOM
			arcG.appendChild(arcGPath);
			chartContainer.appendChild(arcG);
			arcG.appendChild(arcGText);
		});
	});
});