# Fetch (AJAX)

Récupérer des nouvelles données sans recharger entièrement la page (demande coopération du serveur)

Standard, mais moderne (polyfills).

`fetch` retourne une promesse pour un résultat, mais le retourne en deux temps.




````js 
fetch('https://rawgit.com/anthill/ToilettesBordeaux/master/data/toilettes.json')
// La première promesse se résoud quand on a reçu le status et les headers, mais pas encore le body
.then(function(resp){
    // resp.status (resp.ok)
    // resp.headers

    // on explique la manière dont on attend le body quand il arrivera
    return resp.json();
    // return resp.text();
})
// cette seconxde promesse se résoud quand le body est revenu et qu'il est dans la forme qu'on attend (ici un objet JS obtenu en parsant le JSON)
.then(function(toilettes){
    console.log('toilettes', toilettes)
})


````






JSONView http://jsonview.com/


# LocalStorage (IE8+)

string -> string

Stockage par origine
origine : protocole + hostname + port

http://yo.com:5000

* var value = localStorage.getItem(key)
* localStorage.setItem(key, value)
    * object : '[Object object]' => JSON.stringify(obj)
* localStorage.removeItem(key)
* localStorage.length
* localStorage.key(i)
* localStorage.clear();

localStorage.setItem(key, JSON.stringify())

````
var s = new Set();
s.add(x);
s.has(x);
s.remove(x);

function setToArray(s){
    var a = [];
    s.forEach(function(e){ a.push(e); });
    return a;
};
````

# Timers

var t = setTimeout(function(){
    console.log('a')
}, 100)
clearTimeout(t);

var t2 = setInterval(function(){
    console.log('b')
}, 100)
clearInterval(t2);



# History API


https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history

history.pushState({producteur: "producteur"}, "", "trad?producteur="+producteur")

new PopStateEvent('popstate') (history.pushState ne déclenche pas l'évènement)







