"use strict";

import getCommits from './getCommits';
import createCharts from './createCharts';

document.addEventListener('DOMContentLoaded', () =>{
	
	getCommits()
	.then(commits =>{
		
		const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		createCharts(weekDays, commits);
	});
});