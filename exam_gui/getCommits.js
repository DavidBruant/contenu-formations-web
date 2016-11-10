export default function getCommits(){
    
    var commits = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=34e29f79ffe4ea48acc3326403269b35a6de5f1b&page=2')
    .then(function(result){
        return result.json();
    })
    return commits;
}