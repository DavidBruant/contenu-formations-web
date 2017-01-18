export default function getCommits(){
	const _commits1 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=1d1ea5599fad961bab88d7fddeafb9a7fb69e0cd')
					.then(resp => {
						return resp.json();
					});
	const _commits2 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?page=2&access_token=1d1ea5599fad961bab88d7fddeafb9a7fb69e0cd')
					.then(resp => {
						return resp.json();
					});
	const _commits3 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?page=3&access_token=1d1ea5599fad961bab88d7fddeafb9a7fb69e0cd')
					.then(resp => {
						return resp.json();
					});

	const allCommits = Promise.all([_commits1, _commits2, _commits3])
							  .then( ([commits1, commits2, commits3]) => {
							  	return [...commits1, ...commits2, ...commits3];
							  });
	return allCommits;
};