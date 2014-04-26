# Mobile

Performance impactée par le nombre de requêtes HTTP, puis par la quantité de données tranferées
Réduire la quantité de données transférées passe par inliner certains styles/script/données, data URIs

# "Responsive Web Design"

La même page web s'adapte au contexte.
Sur mobile, moins de contenu, images plus petites, etc.

# Media queries

Appliquer du CSS seulement sous certaines conditions

<!-- CSS media query on a link element -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

<!-- CSS media query within a style sheet -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
</style>

## media features

* contenu
width | min-width | max-width | height | min-height | max-height
aspect-ratio


* device
device-width, etc.
device-aspect-ratio


* autre
orientation

Exemple:
http://css-tricks.com/css-media-queries/


(responsive mode des devtools)


// tweet avec photo 100x100 (width > 800)
// tweet avec photo 50x50 
// tweet avec seulement le nom de l'auteur (width < 400)

# "mobile web app"

<meta name="apple-mobile-web-app-capable" content="yes">


