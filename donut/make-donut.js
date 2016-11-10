import * as d3 from 'd3-shape'

export default function makeDonut(jourSemaine){
	var width = 960,
	    height = 500,
	    radius = Math.min(width, height) / 2;

	var color = ["#0E4F7F", "#24597F", "#1683CC", "#208FCE", "#2DBEFF", "#CFE5FF", "#6ABFFF"]

	var donut = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		donut.setAttribute("width", width);
		donut.setAttribute("height", height);
	var gGlobal = document.createElementNS('http://www.w3.org/2000/svg', 'g');
	gGlobal.setAttribute("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	var tableauData = new Array();

	Object.keys(jourSemaine).forEach(function(jour){
		tableauData.push(jourSemaine[jour]);
	});

	var data = d3.pie()(tableauData);
	console.log(data);

	var i=0;

    Object.keys(jourSemaine).forEach(function(jour){
    	console.log(data[i].startAngle);
    	console.log(data[i].endAngle);

    	var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    	var arc = d3.arc()({outerRadius :(radius - 10),innerRadius :(radius - 70),startAngle :(data[i].startAngle),endAngle :(data[i].endAngle)});
	    console.log(arc);

	    path.setAttribute('d', arc);
    	path.setAttribute('fill', color[i]);

    	var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    	text.textContent = jour;
    	g.appendChild(path);
    	g.appendChild(text);
    	gGlobal.appendChild(g);
    	i++;
    });

    donut.appendChild(gGlobal);
	/*d3.json("data.csv", type, function(error, data) {
	  if (error) throw error;

	  var g = svg.selectAll(".arc")
	      .data(pie(data))
	    .enter().append("g")
	      .attr("class", "arc");

	  g.append("path")
	      .attr("d", arc)
	      .style("fill", function(d) { return 'blue'; });

	  g.append("text")
	      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
	      .attr("dy", ".35em")
	      .text(function(d) { return d.data.age; });
	});*/
	return donut;
}