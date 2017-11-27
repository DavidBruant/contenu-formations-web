# Standards

* HTML 4.01
    * Décembre 1999
* XHTML 1
    * Janvier 2000
* XHTML 2
    * [Abandonné fin 2009](http://www.w3.org/News/2009#entry-6601)
* HTML5
    * "[HTML Living standard](http://www.whatwg.org/specs/web-apps/current-work/multipage/index.html)" maintenu par le WHATWG depuis 2004

* Backward compatibilité absolue (cercles concentriques)

https://www.chromestatus.com/metrics/css/popularity

# Boilerplate

(Montrer document)


# Sémantique

* Liens via &lt;a href="https://www.youtube.com/watch?v=2zNSgSzhBfM ">cette vidéo est géniale !&lt;/a>

* &lt;meta>
    * Intégration réseaux sociaux

* &lt;ul> &lt;ol> &lt;li>

* "HTML5" &lt;article> &lt;menu> &lt;section> &lt;footer> &lt;header> &lt;nav> &lt;main> &lt;template>

* &lt;table> Seulement pour des données tabulaires
    * Regarder [`display:flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) ou [`display:table`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) en CSS pour aligner/centrer des éléments visuellement.

* &lt;div> &lt;span>

# Media

* &lt;img src="http://example.org/azerty">
    * jpeg
    * png (transparence)
    * svg
    * gif
* &lt;audio src="http://example.org/azerty">
* &lt;video src="http://example.org/azerty.mp4">
    * &lt;source src="http://example.org/yo.webm" type="video/webm">

# Comportements par défaut

* liens
* formulaires
* &lt;form action="{{url}}" method="POST">
    * Method: GET ou POST
    * Pas de formulaire imbriqué
    * &lt;button type="submit">
    * Permet de valider le formulaire en tapant sur [Entrée]
* &lt;input>
    * type: text, radio, url, email (@ sur le clavier mobile), number, file, search, date, datetime
    * placeholder="coucou"
    * &lt;label>Nom &lt;input>&lt;/label> pour le focus sur l'input quand clic sur label (attribut `for` + input[id] sinon)
    * required
* &lt;textarea>, &lt;select>+&lt;option>,    
    
Styler les éléments par défaut
* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Styling_HTML_forms
* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Advanced_styling_for_HTML_forms
    
# Charger une autre page

* &lt;iframe src="http://....">
    * sandbox
    
# Attributs communs

* `hidden`
* `lang` (surtout pour &lt;html>)
* `class`
* `id`
* data attribute
    * attributs libres qui commencent par `data-`

## Input 

* autocomplete

# Styles    
    
* Dans le &lt;head>
* inline : &lt;style>&lt;/style>
* fichier séparé : &lt;link rel="stylesheet" href="{{url}}">
    
# Scripts    
    
* inline &lt;script>
    * Bloque le parser HTML à cause d'appels potentiels à `document.write`. NE PAS UTILISER !
    * si attribut `type` n'est pas reconnu, le navigateur n'execute pas.
        * templates, données en JSON
* &lt;script src="">&lt;/script> (toujours fermer !)
    * Bloque le parser HTML
    * attribut `defer`
        * execution juste avant DOMContentLoaded
        * si plusieurs scripts avec defer, ordre d'execution préservé pour l'execution
        * https://twitter.com/jaffathecake/status/527673683804835841
    * attribut `async`
        * executé dès que possible, dès la réception du fichier
        * Si plusieurs scripts avec async, aucun ordre d'execution établi
        * Pour conserver l'ordre ajouter les scripts dynamiquement et mettre .async="false"
        
        
Références
* http://hsivonen.iki.fi/script-execution/
* http://www.html5rocks.com/en/tutorials/speed/script-loading/
* https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/    
    
# Misc

* favicon: &lt;link rel="shortcut icon" href="favicon.ico">
    
    
# Selecteurs CSS    

* Tous les éléments d'un certain type
    * `span`, `div`, `p`, `body`, `*`, etc.
* Tous les éléments avec la classe `azerty`
    * `.azerty`
* L'élément avec l'id `tabs`
    * `#tabs`
* Les éléments avec un certain attribut
````css
a[href]{
    
}
input[type="email"]{
        
}
input[disabled]{
    cursor: disabled;
}
````

* Composition
    * `E, F` "et"
    * `E F` "descendant"
    * `E > F` "enfant"
* Pseudo-classes
    * n-ième élément (IE9)
        * `x:nth-of-type(3)`
        * `x:nth-child(even)`
        * `x:nth-child(odd)`
        * `x:nth-of-type(2n+1)`
        * `:first-child`, `:last-child`
        
        tr td{
	        background-color: white;
		}
        tr:nth-child(odd) td{
	        background-color: grey;
		}
    * http://nthmaster.com/
        
        
    * Style pour quand (IE9)
        * `:target`
            * [stackoverflow](http://stackoverflow.com/questions/21951734/react-js-custom-events-for-communicating-with-parent-nodes#comment33261204_21951734)
            * image gallery
    * Style pour quand on passe la souris par-dessus
        * `:hover`
    
    

# Box model

* width/height
* padding
* border
* margin

(montrer devtools)

* box-sizing: border-box

# Positionnement

* document flow

````
*{
  position: absolute;
  top: 0;
  left:0;
}
````

* display
    * block
    * inline
    * inline-block
    * table
        * table
        * table-row
        * table-cell
    * flex
        * `flex-direction` `column` `row`
        * `justify-content`
        * `align-items`
        * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    * none
    * grid
    
* position (+top/right/bottom/left)
    * relative
    * absolute
        * et relative > absolute
    * fixed


# Text

@font-face 
http://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/

# Color

#123456
hsl(204, 27%, 24%)

rgb(255, 33, 21);
rgba(255, 33, 21, 0.1);

hsl()
http://fr.wikipedia.org/wiki/Teinte_Saturation_Luminosit%C3%A9#Mod.C3.A8les_colorim.C3.A9triques


# CSS

Normalize css http://necolas.github.io/normalize.css/
Bootstrap http://getbootstrap.com/

Font d'icônes : http://fortawesome.github.io/Font-Awesome/

Thimble


https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills

# Data URIs

http://dopiaza.org/tools/datauri/index.php

# Vrac

https://github.com/h5bp/html5-boilerplate
http://worrydream.com/MagicInk/
http://w3c-webmob.github.io/installable-webapps/
https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills

