import * as d3 from 'd3-shape';

export default function createDonut(allTabs){

    var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2;

    var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    
    var group = document.createElementNS('http://www.w3.org/2000/svg', "g");
    
    

    var data = [];

    document.body.appendChild(svg);
    svg.appendChild(group);
    
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    Object.keys(allTabs).forEach(function(day){
        data.push(allTabs[day].length);
    })

    var arcs = d3.pie()(data);

    arcs.forEach(function(day){
        var arc = d3.arc()({
            innerRadius: 50,
            outerRadius: 100,
            startAngle: day.startAngle,
            endAngle: day.endAngle
        });
        
        var g = document.createElementNS('http://www.w3.org/2000/svg', "g");
        g.setAttribute("transform", "translate(480,250)");
        group.appendChild(g);
        
        var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
        path.setAttribute("d", arc);
        path.setAttribute("text", "caca");
        
        const color = Math.floor(Math.random() * 360) + 1;
        path.setAttribute("style", 'fill: hsl(' + color +', 70%, 50%)');
        
        g.appendChild(path);
        
    })



}