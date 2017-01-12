# Programmation Orientée Objet

##  Motivation

Ecrire du code que l'on peut réutiliser dans d'autres contextes.

## Qu'est-ce qu'un objet ?

Dans la littérature, un objet, c'est :
* des propriétés (données/autres objets)
* des méthodes (code qui manipule les données)

Mon opinion : 
* des évènements 
    * notamment pour être alerté des changements internes d'état sans avoir à appeler une méthode fréquemment

### JavaScript

Il n'y a que des propriétés dans les objets en JS. Les méthodes sont des propriétés dont la valeur est une fonction et que l'on appelle avec le `.`.

````js
var circle = {
    // propriété
    radius: 10, 
    // "méthode"
    getDiameter: function(){
        return 2 * Math.PI * this.radius;
    } 
};

circle.getDiameter();
````

## Encapsulation

Un objet définit une frontière. Il "encapsule" son état interne et n'affiche qu'un ensemble de méthodes.
Celà permet de garantir que certaines choses ne peuvent pas être modifiées et donc avoir des garanties sur la correction du programme. Par voie de conséquence, des programmes pratiquant correctement l'encapsulation garantissent une meilleure sécurité.

En Java, PHP, C++, les propriétés et méthodes peuvent être définies `public` ou `private`.
En JavaScript, tout est publique. On se débrouille autrement pour l'encapsulation.

```js
// "constructor"
function C(){
    var private1 = 764;

    return {
        public1: 1234,
        method1: function(){
            return private1 + this.public1;
        }
    }
}

var c = new C();
c.method1();
c.public1;
c.private1; // undefined
```

Modules : 

````js
import ...

// caché
var hidden = 45678

export default function(){
    return hidden*2;
}

````


## Design patterns

"Façons" d'utiliser/organiser des objets ensemble.

https://en.wikipedia.org/wiki/Software_design_pattern


## Composition

### Spécialisation via héritage

Des fois, on veut créer un objet qui est la composition de plusieurs objets.
Exemple : 
* On veut créer des `Animal`
* On veut créer des `Animal` qui marchent

On crée une "classe" `Animal` générique et on créé une seconde "classe" qui spécialise la première. En Java, PHP, C++ : 

````java
class Animal{}
class Walkable extends Animal{}
````

En JavaScript, on peut utiliser le prototype : 
````js
function Animal(name){
    this.name = name;
    // ...
}
Animal.prototype = {
    isAlive: function(){
        console.log(this.name, 'is alive... maybe')
    }
}

function Walkable(name){
    Animal.call(this, name);
    // ...
}
Walkable.prototype = Object.create(Animal.prototype);
Walkable.prototype.walk = function(){
    console.log(this.name 'walking')
}
````

Mais tout ce bordel, c'était galère, alors en ES6, y'a le mot-clef `class` :

````js
class Animal{}
class Walkable extends Animal{}
````

Avec la différence qu'en Java, PHP, C++, on peut écrire `extends C1, C2, C3`, mais en JavaScript, on ne peut `extends` qu'une seule classe.

### Composition "égale" et le problème du diamant

On peut faire un animal qui marche (Walkable).
On peut faire un animal qui nage (Swimable)

Comment fait-on un canard ou un crocodile ?

(Expliquer le problème du Diamant)

On comprend donc que l'héritage nous limite dans notre capacité à modéliser le monde.
Ce que l'on veut, c'est composer des objets, pas seulement les faire hériter. L'héritage n'est qu'une seule forme de composition. Il y en a d'autres.

#### Les mixins (et "traits")

Principe : prendre plusieurs objets et créer un nouvel objet qui contient l'ensemble de toutes les propriétés de tous les objets d'entrée.

Avant, on galérait, maintenant, on a `Object.assign`

````js
function Walkable(){...}
Walkable.prototype = {...}

function Swimable(){...}
Swimable.prototype = {...}

function WalkAndSwimable(){}
WalkAndSwimable.prototype = Object.assign(
    {}
    Walkable.prototype,
    Swimable.prototype
);
````

Il n'y a pas de syntaxe qui aide avec ce genre de problèmes en ES6.

(Etudier les objets existants de MultiSnake)