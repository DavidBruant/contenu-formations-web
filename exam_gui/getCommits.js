export default function getCommits(){

    var commits = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=2522f2dffa38f134ebb034b56257c23e0a673669&page=1')
    .then(function(result){
        return result.json();
    })

    var commits2 = fetch('https://api.github.com/repos/Financial-Times/polyfill-service/commits?access_token=2522f2dffa38f134ebb034b56257c23e0a673669&page=1')
    .then(function(result){
        return result.json();
    })
    
    return Promise.all([commits, commits2]).then(function(result){
        return result[0].concat(result[1]);
    })
}