"use strict";

import moment from 'moment';
import getCommits from './getCommits';

document.addEventListener('DOMContentLoaded', () =>{
	
	getCommits()
	.then(commits =>{
		// const commitsDate = commits.map(commit => moment(commit.commit.author.date).format('dddd'));
		
		// const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

		// weekDays.forEach(day =>{
		// 	const dailyCommits = commitsDate.filter(commit {
		// 		commit === day;
		// 	});

		// 	console.log(dailyCommits);

		console.log(commits);
		});
	});