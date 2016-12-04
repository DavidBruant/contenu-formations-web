import * as d3 from 'd3-shape';
       
  export default function CreateDonuts() {
  getCommits().then(function(commits) {
       
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute('width', '900');
  svg.setAttribute('height', '900');
  svg.setAttribute('style', 'border: 1px solid black');
  document.body.appendChild(svg);
  var commitsByDay = {
                  'Lundi': [],
                  'Mardi': [],
                  'Mercredi': [],
                  'Jeudi': [],
                  'Vendredi': [],
                  'Samedi': [],
                  'Dimanche': []
  };
       
  commit.forEach(function(commit) {
  var commitjour = moment(commit.commit.author.date);
  var commitweekend = commitjour.format('dddd');
       
  commitsByDay[commitweekend].push(commit);
  });

  var width = 960,
  height = 500,
  radius = Math.min(width, height) / 2,
  colors = ["orange", "red", "grey", "black", "green", "blue", "purple"];
       
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  document.body.appendChild(svg);
       
  var transform = document.createElementNS("http://www.w3.org/2000/svg", "g");
  transform.setAttribute('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
  svg.appendChild(transform);
       
                      
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
      
});
