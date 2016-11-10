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
        path.setAttribute('d', d);
        path.setAttribute('fill', colors[index]);
        g.appendChild(path);

        // Create the Legend
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute('width', '25');
        rect.setAttribute('height', '25');
        rect.setAttribute('fill', colors[index]);
        var rectTransformVertical = (width / 2) * -1 + 10;
        var rectTransformHorizontal = ((height / 2) * -1) + index * 50 + 10;
        rect.setAttribute('transform', 'translate('+ rectTransformVertical +', '+ rectTransformHorizontal +')');
        g.appendChild(rect);

        // Create the Legend label element
        var label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.classList.add('label');
        label.textContent = arc.data.label;
        var labelTransformVertical = (width / 2) * -1 + 50;
        var labelTransformHorizontal = ((height / 2) * -1) + index * 50 + 26 ;
        label.setAttribute('transform', 'translate('+ labelTransformVertical +', '+ labelTransformHorizontal +')');
        g.appendChild(label);

        // Create the number label element
        var number = document.createElementNS("http://www.w3.org/2000/svg", "text");
        number.classList.add('number');
        number.textContent = arc.data.count;
        number.setAttribute('fill', '#fff');
        number.setAttribute('transform', 'translate('+ arcD3.centroid(arc) +')');
        g.appendChild(number);
    });

    return svg;
}