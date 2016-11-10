'use strict';
import getCommits from './get-commits';
import getDays from './get-days';
import makeDonut from './make-donut'

getCommits().then(function(commits){

	console.log(commits);

	var jourSemaine = getDays(commits);

	console.log(jourSemaine);

	document.body.appendChild(makeDonut(jourSemaine));
});