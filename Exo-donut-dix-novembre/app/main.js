"use strict";

import getCommits from './getCommits';

document.addEventListener('DOMContentLoaded', () =>{
	
	getCommits()
	.then(commits =>{
		console.log(commits);
	});
});