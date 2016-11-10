"use strict";
 
export default function getCommits() {
 
	var url = 'https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=380cfe95725b59cf9ea64f3e05c58c39a2be6614&per_page=100';

	return fetch(url)
		.then(function(result) {
			console.log(result);
			return result.json();
		})
		.catch(function(error) {
			console.log(error);
		});
 
}