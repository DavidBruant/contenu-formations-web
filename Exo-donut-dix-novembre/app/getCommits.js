export default function getCommits(){
	const commits = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=1d1ea5599fad961bab88d7fddeafb9a7fb69e0cd')
					.then(resp => {
						return resp.json();
					});
	return commits
};

// 1d1ea5599fad961bab88d7fddeafb9a7fb69e0cd