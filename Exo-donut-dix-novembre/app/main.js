"use strict";

import moment from 'moment';
import getCommits from './getCommits';

document.addEventListener('DOMContentLoaded', () =>{
	
	getCommits()
	.then(commits =>{

		console.log(commits);
		
		const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

		weekDays.forEach(day =>{
			
			const dailyCommits = commits.filter(commit => moment(commit.commit.author.date).format('dddd') === day);

			const dailyCommitsNumber = dailyCommits.length;

			console.log(dailyCommitsNumber);
		});
	});
});