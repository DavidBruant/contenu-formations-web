"use strict";

// Fetch 1 File

// export default function getTweets(){
// 	return 

// 	fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
//     .then(function(resp){
//     	return resp.json()}
//     );
// };

// fetch 2 Files

export default function getTweets(){

	let twentyTweetsP = fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
						.then(resp => {
					    	return resp.json()}
					    );
	let hundredTweetsP = fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json')
						.then(resp => {
					    	return resp.json()}
					    );

	let allTweets = Promise.all([twentyTweetsP, hundredTweetsP])
						   .then( ([twentyTweets, hundredTweets]) => {
								return twentyTweets.concat(hundredTweets);
							});

	return allTweets;
    
};