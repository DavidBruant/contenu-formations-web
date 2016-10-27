# Perfermance

https://www.youtube.com/playlist?list=PLS3jzvALRSe6uP9gVfXLCG6nWo7M0hAJY

## Outils d'analyse

http://developers.google.com/speed/pagespeed/insights/
https://developers.google.com/speed/pagespeed/insights_extensions

https://github.com/addyosmani/above-the-fold-css-tools

## Performance réelle

Dans l'ordre :

### Bien concevoir

* Règle d'or : **ne pas faire de travail inutile**
    * Ne pas serialiser/désérialiser plus que nécessaire
    * etc.
    
* **Penser à ses algorithmes**
    * Eviter les algorithmes en O(n²) et plus
    * Bien réfléchir aux interfaces, la manière dont elles sont utilisées et utiliser **les bonnes structures de données**.

### Réseau

#### Eviter la latence réseau

Bordeaux -> San Francisco (ligne droite) : 9.136,68 km (9.14*10⁶ m)
A la vitesse de la lumière (3*10⁸m/s) : 0.031s (31ms)
eventually
Sur le web, la lumière ne transporte pas l'information et pas en ligne droite :-)
La latence réseau est douloureuse pour la performance.

* Envoyer **le moins de requêtes HTTP possible** et le faire **aussi tôt que possible**. Une grosse requête vaut mieux que 10 petites requêtes.
* Utiliser le cache HTTP (voire localStorage dans certains cas)
* (Utiliser un CDN quand on a les moyens)


#### Réduire la taille de transfert

* Utiliser la compression HTTP (gzip)
* Envoyer moins de données
    * Compresser les images, JS, CSS, HTML

## Performance perçue

2) accès DOM (layout/painting)
3) calculs JS


