# Script loading (options)

1. script dans le head 
=> utiliser avec defer
++ téléchargement plus tôt
++ ne gène pas le chargement du HTML


2. script à la fin du body
++ ne gène pas le chargement du HTML

=> 1 et 2 : ne charger que le minimum qui permet de rendre la page interactive


3. script juste après DOMContentLoaded
++ fonctionalités supplémentaires (boutons sociaux) 
++ analytics

4. script chargés "on-demand"
++ disqus

## Resources

https://html.spec.whatwg.org/multipage/scripting.html#attr-script-defer

