export default function getTweets(){
    var tweets1P = fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json')
    .then(function(result){ return result.json() });
    
    return tweets1P;
}