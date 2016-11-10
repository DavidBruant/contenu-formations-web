export default function getCommits(){

	var c1 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=2719b3599f1f63a7357aa764380544df39e12f2c&page=1&per_page=50')
	.then(function(repo){
		return repo.json();
	})
	.catch(function(error){
		console.log(error);
	});
	var c2 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=2719b3599f1f63a7357aa764380544df39e12f2c&page=2&per_page=50')
	.then(function(repo){
		return repo.json();
	})
	.catch(function(error){
		console.log(error);
	});
	var c3 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=2719b3599f1f63a7357aa764380544df39e12f2c&page=3&per_page=50')
	.then(function(repo){
		return repo.json();
	})
	.catch(function(error){
		console.log(error);
	});



	return Promise.all([c1,c2,c3])
	.then(function(result){
		return result[0].concat(result[1], result[2]);
	})
}