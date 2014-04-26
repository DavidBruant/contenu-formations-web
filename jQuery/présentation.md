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
    * addEventListener
    
# jQuery

2 métiers : 
* syntaxe plus agréable que l'API DOM native
* niveler les différences et incompatibilités entre navigateurs

https://api.jquery.com/

## DOM

jQuery définit une fonction qui permet de sélectionner des éléments par sélecteur CSS: $ (=== jQuery) (a inspiré document.querySelector/All)
/!\ n'utiliser que les sélecteurs standards !

    $('header menu')

Puis manipuler
Créer un élément:
    
    var li = $('<li></li>')
        .addClass('miaou')
        .text('chats')
        .attr('data-id', '3456')
        .appendTo( $('header menu') );

$('div') VS $('<div>') VS $( document.createElement('div') )

.appendChild

    $('header menu').append(li);
    
    $(li).appendTo('header menu');
    
DOMContentLoaded/load

    $(function(){
        // the document is ready

    });
    
Attributs

    $(sel).attr('data-id');
    $(sel).attr('data-id', '2546');

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
    $('header menu').one('click', listener) // auto-remove


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




