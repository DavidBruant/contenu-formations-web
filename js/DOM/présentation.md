# DOM (Document Object Model)

API pour manipuler un document HTML ou XML (arbre)


# Node

- n.children
- n.parentNode
- parent.append(enfant)
- (anciennement) parent.appendChild(enfant)
- n.remove()
- n.replaceWith(n2)

```js
Node.prototype.remove = Node.prototype.remove || function(){
    this.parentNode.removeChild(this);
}
```

# Document + HTMLDocument

- document.createElement('div')
    - créé une div orpheline
- document.createElementNS('http://www.w3.org/2000/svg', 'g')
    - Pour le SVG

```js
function svgElement(name){
    return document.createElementNS('http://www.w3.org/2000/svg', name)
}
```

- document.querySelector(selector)
- document.querySelectorAll(selector)

`Array.from(document.querySelectorAll('section h1')).map(...)`


# Element + HTMLElement

- e.getAttribute(key)
    a.getAttribute('href')
- e.setAttribute(key, value)
- e.removeAttribute(key)
    - e.removeAttribute('hidden')

- e.textContent
    - e.textContent = ...

- e.querySelector(selector)
- e.querySelectorAll(selector)
    - document.body.querySelectorAll()
    - var foot = document.querySelector('footer');
    foot.querySelector('.mentions-légales');
    
- /!\ e.innerHTML (getter/setter)
- (moderne) e.classList (pour changer les styles)
    - e.classList.add/remove/contains/toggle?
- (ancien, ne pas utiliser) e.className
<div class="yo hyz"></div>
    - .yo.hyz{}
    - .yo .hyz{}
    - .yo, .hyz{}

- e.style.backgroundColor
- maDiv.style.height = x+"%";

.yo{
    background-color: red;
}

- vider un élément
    - `el.innerHTML = '';`


# EventTarget

- n.addEventListener(type, listener, options)
```js
monElement.addEventListener('click', function(){
    console.log('yo');
})
```

options: 

- `once`

```js
monElement.addEventListener('click', function(){
    console.log('yo');
}, {once: true})
```

- `passive`
```js
monElement.addEventListener('touchstart', function(){
    console.log('fib');
}, {passive: true})
```

Autre : 

- n.removeEventListener(type, listener)
    - Attention, comparaison par référence
    - var listener = function(){...}.bind(this);
    
- n.dispatchEvent(e)

- /!\ attributs on- interdits ! (onclick, etc.)
    - unique par élémént

# Evènements

- DOMContentLoaded
    - Quand le HTML est chargée et que l'arbre DOM est construit 
- load
    - Quand la page entière est chargée (CSS, fonts, images, etc.)
- click (mousedown/mouseup/dblclick)
- mouseenter/mouseleave
- submit (&lt;form>)
- keypress (keyup/keydown)
- input
- change
- scroll (listener après le scroll)
- touchstart
    - le listener bloque touchstart

## Event properties

````js
el.addEventListener('click', function(e){
    // Event e
})
````

- e.target
- e.preventDefault()

```js
form.addEventListener('submit', function(e){
    e.preventDefault();
})
```

- e.timeStamp


# Layout tree
