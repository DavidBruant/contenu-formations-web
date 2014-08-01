# Rappels DOM

* HTML est la sérialization d'un arbre DOM (montrer arbre DOM)
* Chaque page web contient un document
* On manipule l'arbre DOM via les primitives de l'interface Node:
    * node.appendChild(child)
    * node.parentNode
    * node.childNodes/node.children (Element)
    * node.get/set/removeAttribute
    * document.createElement
    
* Evènements
    * [addEventListener](https://developer.mozilla.org/fr/docs/DOM/element.addEventListener)
    
# jQuery

2 métiers : 
* syntaxe plus agréable que l'API DOM native
* niveler les différences et incompatibilités entre navigateurs

https://api.jquery.com/
https://github.com/jquery/jquery-migrate/

## DOM

jQuery définit une fonction qui permet de sélectionner des éléments par sélecteur CSS: $ (=== jQuery) (a inspiré document.querySelector/All)
/!\ n'utiliser que les sélecteurs standards !

    $('header menu')

Puis manipuler
Créer un élément:
    
    var li = $('<li></li>')
        .addClass('miaou') // retourne le <li> pour l'appel suivant
        .text('chats')
        .attr('data-id', '3456')
        .appendTo( $('header menu') );

Créer un élément:
    * $('<div></div>') 
    * $( document.createElement('div') )

.appendChild (les 2 approches sont équivalentes)

    $('header menu').append(li);
    $(li).appendTo('header menu');
    
DOMContentLoaded/load

    $(function(){
        // jQuery guarantees the document is ready inside the function (so we can start selecting elements)
    });
    
Attributs

    getter: $(sel).attr('data-id'); 
    setter: $(sel).attr('data-id', '2546');

Style

    $(sel).css({
        color: 'blue',
        display: 'block'
    });

Parent

    $(el).parent('.foo')



## "Promesses" (deferred)


    var def = jQuery.deferred()
    def.resolve()
    def.reject()
    def.promise()

    promise.then(function(val){

    })
    .fail(function(err){

    })
    .done();
    
    p.then => Promise
    p.fail => Promise
    p.done => void


## Event listener

    $('header menu').on('click', function(e){

    })
    $('header menu').off('click', listener)
    $('header menu').one('click', listener) // pour écouter l'évènement une seule fois


# Ajax

    $.get({
        url: 'some url',
        dataType: 'json'
    })
    .then(function(val){
        // val est un objet JavaScript deserialisé de JSON
    })
    .fail(function(err){
    
    })
    
    $.post

# Sucre

    $(sel).hide()
        .show()
        
    $(sel).fadeIn()
        .fadeOut()
        
    $(sel).animate({
        width: 200,
        color: green
    })
    
# each/map

    $('ul li').each(function(i, e){
        
    
    })



// récupérer les tweets via AJAX
// afficher les tweets

// filtrer sur la langue
// bouton pour supprimer des tweets
// ajouter un tweet




