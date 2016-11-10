"use strict";

import moment from 'moment';
import getCommits from './getCommits';
import * as d3 from 'd3-shape';

export default function drawDonuts() {
    getCommits().then(function(commits) {

    var commitsByDay = {
                    'Monday': [],
                    'Tuesday': [],
                    'Wednesday': [],
                    'Thursday': [],
                    'Friday': [],
                    'Saturday': [],
                    'Sunday': []
                };

                commits.forEach(function(commit) {
                    var commitDayFormatted = moment(commit.commit.author.date);
                    var commitDayOfWeek = commitDayFormatted.format('dddd');

                    commitsByDay[commitDayOfWeek].push(commit);
                });
                var width = 960,
                height = 500,
                radius = Math.min(width, height) / 2,
                colors = ["blue", "red", "green", "black", "yellow", "orange", "purple"];

                var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute('width', width);
                svg.setAttribute('height', height);
                document.body.appendChild(svg);

                var transform = document.createElementNS("http://www.w3.org/2000/svg", "g");
                transform.setAttribute('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
                svg.appendChild(transform);

                var data = [
                    commitsByDay.Monday.length,
                    commitsByDay.Tuesday.length,
                    commitsByDay.Wednesday.length,
                    commitsByDay.Thursday.length,
                    commitsByDay.Friday.length,
                    commitsByDay.Saturday.length,
                    commitsByDay.Sunday.length
                    ];

                    console.log(data);
                
                

                var arcD3 = d3.arc()
                    .innerRadius(radius - 10)
                    .outerRadius(radius - 100);

                var arcs = d3.pie()(data);

                arcs.forEach(function(arc, index){
                    var d = arcD3({
                            startAngle: arc.startAngle,
                            endAngle: arc.endAngle
                        });
                    
                    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                    transform.appendChild(g);

                    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute("d",d);
                    path.setAttribute("fill", colors[index]);
                    g.appendChild(path);

                    // var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    // text.textContent = ;
                    // g.appendChild(text);
                });
    });
};