# DOM

API pour manipuler un document HTML ou XML (arbre)

# Structure

* EventTarget
    * Node
        * Element + HTMLElement
        * Document + HTMLDocument
        * DocumentFragment
        * (Comment)

# Node

* n.children/childNodes
* n.parentNode
* parent.appendChild(enfant)
* n.removeChild(n2)
    * n.parentNode.removeChild(n)
    * DOM4: n.remove()
    
Node.prototype.remove = Node.prototype.remove || function(){
    this.parentNode.removeChild(this);
}

# Document + HTMLDocument

* document.createElement('div')
* document.createDocumentFragment()

* document.getElementById('yo')
* document.getElementsByClassName('active')

* document.querySelector(selector)
* document.querySelectorAll(selector)

Array.from(document.querySelectorAll('section h1')).map(...)


# Element + HTMLElement

* e.getAttribute(key)
    a.getAttribute('href')
* e.setAttribute(key, value)
* e.removeAttribute(key)
    * e.removeAttribute('hidden')

* e.textContent
    * e.textContent = ...

* e.id
* e.querySelector(selector)
* e.querySelectorAll(selector)
    * document.body.querySelectorAll()
    * var foot = document.querySelector('footer');
    foot.querySelector('.mentions-légales');
    
* /!\ e.innerHTML (getter/setter)
* e.insertAdjacentHTML(html, position)
* e.className (pour changer les styles)
<div class="yo hyz"></div>
    * .yo.hyz{}
    * .yo .hyz{}
    * .yo, .hyz{}
* e.classList (pour changer les styles)
    * e.classList.add/remove/has/toggle?
* e.style.backgroundColor
* maDiv.style.height = x+"%";

.yo{
    background-color: red;

}

* vider un élément
    * el.innerHTML = '';

# EventTarget

* n.addEventListener(type, listener, capture=false)
* n.removeEventListener(type, listener, capture=false)
    * Attention, comparaison par référence
    * var listener = function(){...}.bind(this);
    * n.addEventListener(type, listener)
    * n.removeEventListener(type, listener)
    
* n.dispatchEvent(e)

# Evènements

* DOMContentLoaded
* load
* click (mousedown/mouseup/doubleclick)
* keypress (keyup/keydown)
* mouseover
* submit (&lt;form>)
* input
* scroll

* "event delegation"

el.addEventListener('click', function(e){
    // Event e
})

* e.target
* e.preventDefault()
form.addEventListener('submit', function(e){
    e.preventDefault();
})

* e.stopPropagation()
* e.currentTarget
* e.timestamp


# Layout tree
