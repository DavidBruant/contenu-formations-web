export default function getCommits(){
	const commits = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits')
					.then(resp => {
						return resp.json();
					});
	return commits
};