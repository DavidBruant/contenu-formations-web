export default function getCommits(){
	var commits = fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
	.then(function(repo){
		return repo.json();
	})
	.catch(function(error){
		console.log(error);
	});

	return Promise.all([commits])
	.then(function(result){
		console.log(result);
		return result[0].concat(result[1]);
	})
}