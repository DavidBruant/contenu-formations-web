# Standards

* HTML 4.01
    * Décembre 1999
* XHTML 1
    * Janvier 2000
* XHTML 2
    * [Abandonné fin 2009](http://www.w3.org/News/2009#entry-6601)
* HTML5
    * "[HTML Living standard](http://www.whatwg.org/specs/web-apps/current-work/multipage/index.html)" maintenu par le WHATWG depuis 2004


# Boilerplate

(Montrer document)


# Sémantique

* Liens via &lt;a href="https://www.youtube.com/watch?v=2zNSgSzhBfM ">cette vidéo est géniale !&lt;/a>

* &lt;meta>

* &lt;ul> &lt;ol> &lt;li>

* "HTML5" &lt;article> &lt;menu> &lt;section> &lt;footer> &lt;header> &lt;main> &lt;template>

* &lt;table> Seulement pour des données tabulaires
    * Regarder [`display:flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) ou [`display:table`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) en CSS pour aligner/centrer des éléments visuellement.


# Comportements par défaut

* liens
* formulaires
* &lt;form action="{{url}}" method="POST">
    * Method: GET ou POST
    * Pas de formulaire imbriqué
    * &lt;button type="submit">
    * Permet de valider le formulaire en tapant sur [Entrée]
* &lt;input>
    * type: text, radio, url, email (@ sur le clavier mobile), number, file, submit, search
    * placeholder="coucou"
    * &lt;label>Nom &lt;input>&lt;/label> pour le focus sur l'input quand clic sur label (attribut `for` + input[id] sinon)
* &lt;textarea>, &lt;select>+&lt;option>,    
    
Styler les éléments par défaut
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Styling_HTML_forms
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Advanced_styling_for_HTML_forms
    
# Attributs communs

* `hidden`
* `lang` (surtout pour &lt;html>)
    
# Styles    
    
* Dans le &lt;head>
* &lt;style>&lt;/style>
* &lt;link rel="stylesheet" href="{{url}}">
    
# Scripts    
    
* inline &lt;script>
    * Bloque le parser HTML à cause d'appels potentiels à `document.write`. NE PAS UTILISER !
* &lt;script src="">&lt;/script> (toujours fermer !)
    * Bloque le parser HTML
    * si attribut `type` n'est pas reconnu, le navigateur n'execute pas.
        * templates, données en JSON
    * attribut `defer`
        * execution juste avant DOMContentLoaded
        * si plusieurs scripts avec defer, ordre d'execution préservé pour l'execution
    * attribut `async`
        * executé dès que possible, dès la réception du fichier
        * Si plusieurs scripts avec async, aucun ordre d'execution établi
        * Pour conserver l'ordre, mettre async="false"
        
        
Références
* http://hsivonen.iki.fi/script-execution/
* http://www.html5rocks.com/en/tutorials/speed/script-loading/
    
    
    
    
# Selecteurs CSS    

* Eléments
    * `span`, `div`, `p`, `body`, `html`, `*`, etc.
* Classes
    * `.chosen`
* id
    * `#tabs`
* Composition
    * `E, F` "et"
    * `E F` "descendant"
    * `E > F` "enfant"
* Pseudo-classes
    * `x:nth-of-type(3)`
    * `:target`
    
    

# Box model

* width/height
* padding
* border
* margin

(montrer devtools)

* box-sizing: border-box

# Positionnement

* document flow

* display
    * block
    * inline
    * inline-block
    * table
    * flex
    * none
    
* position
    * relative
    * absolute
    * fixed


# CSS

Normalize css http://necolas.github.io/normalize.css/
Bootstrap http://getbootstrap.com/
Pure http://purecss.io/




