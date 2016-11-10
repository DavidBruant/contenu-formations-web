"use strict";

import moment from 'moment';
import getCommits from './getCommits';

document.addEventListener('DOMContentLoaded', () =>{
	
	getCommits()
	.then(commits =>{
		const commitsDate = commits.map(commit => moment(commit.commit.author.date).format('dddd'));
		console.log(commitsDate);
	});
});