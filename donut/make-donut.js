import * as d3 from 'd3-shape'

export default function makeDonut(jourSemaine){
	var width = 960,
	    height = 500,
	    radius = Math.min(width, height) / 2;

	var donut = document.createElement('svg');
		donut.setAttribute("width", width);
		donut.setAttribute("height", height);
	var gGlobal = document.createElement('g');
	gGlobal.setAttribute("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    Object.keys(jourSemaine).forEach(function(jour){
    	var g = document.createElement('g');
    	g.className = 'arc';
    	var path = document.createElement('path');

    	var arc = d3.arc()
	    .outerRadius(radius - 20)
	    .innerRadius(radius - 70);
	    path.setAttribute('d',arc);
    	path.setAttribute('fill', 'blue');

    	var text = document.createElement('text');
    	text.textContent = jour;
    	g.appendChild(path);
    	g.appendChild(text);
    	gGlobal.appendChild(g);
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