"use strict";
 
export default function getCommits() {
 
	var page1 = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits?page=1&per_page=100&?access_token=380cfe95725b59cf9ea64f3e05c58c39a2be6614';
	var page2 = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits?page=2&per_page=100&?access_token=380cfe95725b59cf9ea64f3e05c58c39a2be6614';
	var page3 = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits?page=3&per_page=100&?access_token=380cfe95725b59cf9ea64f3e05c58c39a2be6614';

	var commits1 = fetch(page1)
		.then(function(resp){return resp.json()}).catch(function(e){console.error(e);});

	var commits2 = fetch(page2)
		.then(function(resp){return resp.json()}).catch(function(e){console.error(e);});

	var commits3 = fetch(page3)
		.then(function(resp){return resp.json()}).catch(function(e){console.error(e);});

	var commitsList = Promise.all([commits1, commits2, commits3])
								.then(function(results) {
									return results[0].concat(results[1], results[2]);
								})
								.catch(function(e){console.error(e)});
	return commitsList;
 
}