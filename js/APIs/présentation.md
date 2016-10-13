# Fetch (AJAX)

Récupérer des nouvelles données sans recharger entièrement la page (demande coopération du serveur)

Standard, mais moderne (polyfills).

````js 

fetch('https://rawgit.com/anthill/ToilettesBordeaux/blob/master/data/toilettes.json')
.then(function(resp){
    return resp.json();
    // return resp.text();
})
.then(function(toilettes){
    console.log('toilettes', toilettes)
})


````

fetch retourne une promesse pour un résultat.





JSONView http://jsonview.com/


# LocalStorage

string -> string

Stockage par origine
origine : protocole + hostname + port

* var value = localStorage.getItem(key)
* localStorage.setItem(key, value)
* localStorage.removeItem(key)
* localStorage.length
* localStorage.key(i)
* localStorage.clear();

localStorage.setItem('', JSON.stringify())

````
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







