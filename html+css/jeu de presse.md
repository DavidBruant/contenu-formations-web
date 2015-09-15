# Règles

1. Pas de &lt;table> (display: table/table-row/table-cell autorisé)
1. Pas d'attributs de style (align, font, etc.). Pas de &lt;center>. Utiliser du CSS
    1. sauf img@width et img@height
1. Unités : pas de tailles en px ou pt. Utiliser des % (contenants) ou em (textes)
1. Pas de float
1. Interdiction d'utiliser !important

1. Les images n'ont aucune importance. Juste prendre des images qui font la même taille/proportion
1. Les textes n'ont aucune importance. Juste mettre la même quantité de texte.

1. Utiliser les éléments sémantiques (header, footer, h1, h2, p, hr, etc.)
1. id interdits (utiliser des classes ou les parents dans des sélecteurs plus fins ou :nth-of-type/:nth-of-child)