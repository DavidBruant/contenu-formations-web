# Architecture client-serveur

# HTTP

* Requête -> Réponse

* verbes (GET/POST/PUT/DELETE)
* headers
    * (des exemples !)
* corps
    * sauf GET

* Mozilla/5.0 (X11; Linux i686 on x86_64; rv:30.0) Gecko/20100101 Firefox/30.0
* Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36

"feature dectection" à la place "user agent sniffing"

* Cookies lightbeam, DNT

## Cache

Deux types de cache ():
* "garde la ressource jusqu'à date X"
    * Le navigateur va utiliser cette ressource jusqu'à la date sans demander de reconfirmation au serveur
* "garde cette resource et associes-y le header `Etag`. Demande-moi la ressource à chaque fois avec le header `If-None-Match` et la valeur du Etag"
    * Le serveur répond 304 Not Modified et un corps de réponse vide si la ressource est toujours valide
    
https://github.com/h5bp/html5-boilerplate/blob/c3a72ff882104a1abc6ed05f5ca3eabb11c08a51/.htaccess#L633-L725



# URL

protocol + hostname + port + pathname + search + hash
https://developer.mozilla.org:8987/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest?bla=yo#yuo


origin = protocol + hostname + port
http://url.spec.whatwg.org/


