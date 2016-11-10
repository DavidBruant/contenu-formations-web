"use strict";

import * as d3 from 'd3-shape';

export default function createDonuts(data, weekday){

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute('width', '600');
  svg.setAttribute('height', '600');
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

  document.body.appendChild(svg);

  var color = ["#00585F","#009393","#63A69F","#F2E1AC","#F2836B","#CD2C24","#F2594B"]

  var arcs = d3.pie()(data);
  var i = 0;
  arcs.forEach(function(e){
    var arc = d3.arc()
    .innerRadius(200)
    .outerRadius(300)
    .startAngle(e.startAngle)
    .endAngle(e.endAngle);

    console.log();

    var g = document.createElementNS("http://www.w3.org/2000/svg","g");
    g.setAttributeNS(null, "transform", "translate(300,300)");

    svg.appendChild(g)

    var text = document.createElementNS("http://www.w3.org/2000/svg","text");
    text.setAttributeNS(null, "x", (arc.centroid()[0])-30);
    text.setAttributeNS(null, "y", arc.centroid()[1]);
    text.setAttributeNS(null, "font-size", 18);
    text.setAttributeNS(null, "font-family", "Helvetica");
    text.innerHTML = weekday[i] + ' - ' + e.data + '%';

    var path = document.createElementNS("http://www.w3.org/2000/svg","path");
    path.setAttributeNS(null, "id", "pathIdD");
    path.setAttributeNS(null, "d", arc());
    path.setAttributeNS(null, "stroke", "black");
    path.setAttributeNS(null, "stroke-width", 1);
    path.setAttributeNS(null, "opacity", 1);
    path.setAttributeNS(null, "fill", color[i]);
    g.appendChild(path);

    g.appendChild(text);

    i++;
  });



}
