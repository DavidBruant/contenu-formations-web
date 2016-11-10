"use strict";

import getCommits from './getCommits';
import createDonut from './createDonut';
import moment from 'moment';
import _ from 'lodash';

document.addEventListener('DOMContentLoaded', function(){

	getCommits().then(function(commits) {
       var commitsDay = _.groupBy(commits, function(commit) {
			var day = moment(commit.commit.author.date).format('dddd');
			return day;
		});
       
       createDonut(commitsDay);

    });

})