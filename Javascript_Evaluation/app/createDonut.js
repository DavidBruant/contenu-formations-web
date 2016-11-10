"use strict";

import * as d3 from 'd3-shape';
export default function createDonnut(commitsDay) {

	var dataPie = [];

	var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute("width","960");
	svg.setAttribute("height","960");

	var gGlobal = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	gGlobal.setAttribute("transform","translate(480,250)");

	Object.keys(commitsDay).forEach(function(key) {
		dataPie.push(commitsDay[key].length);
	});

	var arcs = d3.pie()(dataPie);

	console.log(arcs[0]);

	var i = 0;

	Object.keys(commitsDay).forEach(function(key) {

		var innerRadius = 200;
		var outerRadius = 250;

		var arc = d3.arc()
		    .innerRadius(innerRadius)
		    .outerRadius(outerRadius)
		    .startAngle(arcs[i].startAngle)
		    .endAngle(arcs[i].endAngle);

		var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		g.classList.add("arc");

		var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute("d", arc());

		const color = Math.floor(Math.random() * 100) + 1;
		path.setAttribute("style", 'fill: hsl(' + color +', 70%, 50%)');

		var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		text.innerHTML = key + " - " + commitsDay[key].length;
		text.setAttribute("transform", "translate(" + arc.centroid((arcs[i].startAngle+arcs[i].endAngle)/2, (innerRadius+outerRadius)/2) + ")");

		g.append(path);
		g.append(text);
		gGlobal.appendChild(g);
		i++;
	});

	svg.append(gGlobal);
	document.body.append(svg);

};