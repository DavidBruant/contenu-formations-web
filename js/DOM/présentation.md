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
    * n.parentNode.remove(n)

# Document + HTMLDocument

* document.createElement('div')
* document.createDocumentFragment()


# Element + HTMLElement

* e.getAttribute(key)
* e.setAttribute(key, value)
* e.textContent
* e.id

* e.getElementById
* e.getElementsByClassName
* e.querySelector(selector)
* e.querySelectorAll(selector)
    * Pas un array ECMAScript pour des raisons historiques
* e.innerHTML (getter/setter)
* e.insertAdjacentHTML(html, position)
* e.className (pour changer les styles)
* e.classList (pour changer les styles)
    * e.add/remove/has
* e.style.backgroundColor

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

* "event delegation"

* e.target
* e.currentTarget
* e.timestamp




# HTMLDOM

* e.style.backgroundColor



