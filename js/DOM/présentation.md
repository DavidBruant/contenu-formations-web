# DOM

API pour manipuler un document HTML ou XML (arbre)

# Structure

* EventTarget
    * Node
        * Element + HTMLElement
        * Document + HTMLDocument
        * DocumentFragment
        * TextNode
        * (Comment)

# Node

* n.children/childNodes
* n.parentNode
* n.appendChild(n2)
* n.removeChild(n2)
    * n.parentNode.removeChild(n)
    * DOM4: n.remove()
    
Node.prototype.remove = Node.prototype.remove || function(){
    this.parentNode.removeChild(this);
}

# Document + HTMLDocument

* document.createElement('div')
* document.createDocumentFragment()

* document.getElementById
* document.getElementsByClassName
* document.querySelector(selector)
* document.querySelectorAll(selector)

Array.from(document.querySelectorAll('section h1')).map(...)


# Element + HTMLElement

* e.getAttribute(key)
* e.setAttribute(key, value)
* e.removeAttribute(key)
* e.textContent

* e.id
* e.getElementById
* e.getElementsByClassName
* e.querySelector(selector)
* e.querySelectorAll(selector)
    * document.body.querySelectorAll()
    * Pas un array ECMAScript pour des raisons historiques
* e.innerHTML (getter/setter)
* e.insertAdjacentHTML(html, position)
* e.className (pour changer les styles)
<div class="yo hyz"></div>
    * .yo.hyz{}
    * .yo .hyz{}
    * .yo, .hyz{}
* e.class

* e.classList (pour changer les styles)
    * e.classList.add/remove/has/toggle?
* e.style.backgroundColor

.yo{
    background-color: red;

}


# EventTarget

* n.addEventListener(type, listener, capture=false)
* n.removeEventListener(type, listener, capture=false)
    * Attention, comparaison par référence
* n.dispatchEvent(e)

# Evènements

* DOMContentLoaded
* load
* click (mousedown/mouseup/doubleclick)
* keypress (keyup/keydown)
* mouseover
* submit (&lt;form>)
* input

* "event delegation"

el.addEventListener('click', function(e){
    // Event e
})

* e.target
* e.preventDefault
form.addEventListener('submit', function(e){
    e.preventDefault();
})

* e.stopPropagation
* e.currentTarget
* e.timestamp


# Layout tree
