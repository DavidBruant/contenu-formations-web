// fetch

var httpRespP = fetch(url)

var bodyP = httpRespP.then(function(resp){
    // réponse HTTP (avec code de statut et headers, mais pas de body)
    resp.headers
    resp.status
    // ...
    //return resp.text();
    return resp.json()
});

bodyP.then(function(body){
    console.log(body.lol)
})