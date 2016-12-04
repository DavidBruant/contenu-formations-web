
// AVANT quand tu définissais une fonction globale comme ça, elle "existait" dans les autres fichiers
// Ce n'est plus le cas avec les modules.
// une fois qu'un module est executé, la seule chose qui existe est ce qui est exporté explicitement

// l'export d'un module, c'est un peu comme le return d'une fonction

export default function getCommits(){

    var commitP1 = fetch('https://api.github.com/repos/facebook/react/commits?page=1')
    return CommitP1.then(function(response) {
         return response.json();
    })
}

// export default function getCommits(){

//     var commitP2 = fetch('https://api.github.com/repos/facebook/react/commits?page=2')
//     return react.then(function(response) {
//          return response.json();
//     })
// }

// export default function getCommits(){

//     var commitP3 = fetch('https://api.github.com/repos/facebook/react/commits?page=3')
//     return react.then(function(response) {
//          return response.json();
//     })
// }