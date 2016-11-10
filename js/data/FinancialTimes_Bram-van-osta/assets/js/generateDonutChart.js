"use strict";

import * as d3 from 'd3-shape';

export default function generateDonutChart(data) {

    // Donut chart settings
    var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2,
        colors = ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40", "#a59ed8"];

    // Create the base SVG container
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    // Create the G container which will center the chart in the SVG container
    var transform = document.createElementNS("http://www.w3.org/2000/svg", "g");
    transform.setAttribute('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    svg.appendChild(transform);

    // Instantiate the D3 arc function with basic settings
    var arcD3 = d3.arc()
        .innerRadius(radius - 10)
        .outerRadius(radius - 100);

    // Instantiate the D3 pie function with basic settings
    var pieD3 = d3.pie()
        .sort(null)
        .value(function(d) { return d.count; });

    // Create the different arcs from the given data
    var arcs = pieD3(data);

    // Create the Paths and Text for each arc
    arcs.forEach(function(arc, index) {
       var d = arcD3({
           startAngle: arc.startAngle,
           endAngle: arc.endAngle
       });

        // Create a container for each arc
        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        transform.appendChild(g);

        // Create the Path element
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        path.setAttribute("fill", colors[index]);
        g.appendChild(path);

        // Create the Text element
        var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.textContent = arc.data.label + ' - ' + arc.data.count;
        text.setAttribute('transform', 'translate('+ arcD3.centroid(arc) +')');
        g.appendChild(text);
    });

    return svg;
}