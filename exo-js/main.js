import moment from 'moment';
import d3 from 'd3-shape';

//browserify main.js -o browserify-bundle.js -t rollupify -d -v

document.addEventListener('DOMContentLoaded', function(){

	// charger et afficher les tweets de 
	var commits1 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=5b1b53776a1207333639b073bc7201af4d1a53ba&?page=1&per_page=100')
	.then(function(result){ return result.json() });
	var commits2 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=5b1b53776a1207333639b073bc7201af4d1a53ba&?page=2&per_page=100')
	.then(function(result){ return result.json() });
	var commits3 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=5b1b53776a1207333639b073bc7201af4d1a53ba&?page=3&per_page=100')
	.then(function(result){ return result.json() });

	var arr = { "Monday" : 0, "Tuesday" : 0, "Wednesday": 0, "Thursday" : 0, "Friday" : 0, "Saturday" : 0, "Sunday" : 0 };
	var compteur = 0;

	Promise.all([commits1, commits2, commits3])
	.then(function(results) {

 		var commits = results[0].concat(results[1], results[2]);

		commits.forEach(function(x){
			var jour = moment(x.commit.author.date).format('dddd');
			//var jour = x.commit.author.date;
			console.log(jour);

			arr[jour] = arr[jour] + 1;
			compteur = compteur + 1;
		});

		//Calcul en pourcentage du nombre de commits sur une journée
		var Monday = (arr["Monday"] * 100) / compteur;
		var Tuesday = (arr["Tuesday"] * 100) / compteur;
		var Wednesday = (arr["Wednesday"] * 100) / compteur;
		var Thursday = (arr["Thursday"] * 100) / compteur;
		var Friday = (arr["Friday"] * 100) / compteur;
		var Saturday = (arr["Saturday"] * 100) / compteur;
		var Sunday = (arr["Sunday"] * 100) / compteur;
		
		var color = ["#0E4F7F", "#24597F", "#1683CC", "#208FCE", "#2DBEFF", "#CFE5FF", "#6ABFFF"];

		var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.setAttribute("width","960");
		svg.setAttribute("height","960");

		var gGlobal = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		gGlobal.setAttribute("transform", "translate(480,380)");
	
		var i = 0;

		arcs.forEach(function(e){

			var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
			var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

			console.log(e);
			var arc = d3.arc()
			.innerRadius(200)
			.outerRadius(300)
			.startAngle(e.startAngle)
			.endAngle(e.endAngle);

			path.setAttribute('d', arc());
			path.setAttribute('fill', color[i]);


			var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			text.textContent = e.data;
			text.setAttribute("transform", "translate(" + arc.centroid((arcs[i].startAngle+arcs[i].endAngle)/2, (arcs[i].innerRadius+arcs[i].outerRadius)/2) + ")");

			g.appendChild(path);
			g.appendChild(text);
			gGlobal.appendChild(g);

			i++;

		});

		document.body.appendChild(svg);
		svg.appendChild(gGlobal);
		
 	})
 	.catch(function(e){console.error(e)});
		
});
