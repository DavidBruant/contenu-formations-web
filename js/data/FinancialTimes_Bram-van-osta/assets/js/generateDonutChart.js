"use strict";

import * as d3 from 'd3-shape';

export default function generateDonutChart(data) {

    var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2;

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    document.body.appendChild(svg);

    var transform = document.createElementNS("http://www.w3.org/2000/svg", "g");
    transform.setAttribute('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    svg.appendChild(transform);


    var colors = ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40", "#a59ed8"];
    var arcD3 = d3.arc();

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.count; });

    var pieArcs = pie(data);

    console.log(pieArcs);

    var arcs = pieArcs.map(function(pieArc) {
        return arcD3({
            innerRadius: radius - 10,
            outerRadius: radius - 70,
            startAngle: pieArc.startAngle,
            endAngle: pieArc.endAngle
        });
    });

    console.log(arcs);

    arcs.forEach(function(arc, index) {
        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        transform.appendChild(g);

        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", arc);
        path.setAttribute("fill", colors[index]);
        g.appendChild(path);

        var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.textContent = pieArcs[index].data.label;
        // console.log(arcD3.centroid(pieArcs[index]));
        var r = (radius - 10 + radius - 70) / 2,
            a = (pieArcs[index].startAngle + pieArcs[index].endAngle) / 2 - Math.PI / 2;
        text.setAttribute('transform', 'translate('+ Math.cos(a) * r +', '+ Math.sin(a) * r +')');
        g.appendChild(text);
    });

    // arcs.forEach(function(d, i) {
    //     console.log(d);
    //     context.beginPath();
    //     arc(d);
    //     context.fillStyle = colors[i];
    //     context.fill();
    // });

    // context.beginPath();
    // arcs.forEach(arc);
    // context.strokeStyle = "#fff";
    // context.stroke();
    //
    // context.textAlign = "center";
    // context.textBaseline = "middle";
    // context.fillStyle = "#000";
    // arcs.forEach(function(d) {
    //     var c = labelArc.centroid(d);
    //     context.fillText(d.data.label, c[0], c[1]);
    // });
}