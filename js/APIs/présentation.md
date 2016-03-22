# XMLHttpRequest (AJAX)

Récupérer des nouvelles données sans recharger entièrement la page (demande coopération du serveur)

(montrer exemple)

* xhr.open/send
* xhr.setRequestHeader(header, value) (avant d'envoyer)
* xhr.getResponseHeader(header) (après la réponse)

* Promise https://github.com/jakearchibald/es6-promise
* sync document ready & xhr


* DOMContentLoaded
* getContent (xhr)
* mise à jour

JSONView http://jsonview.com/


# LocalStorage

string -> string

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







