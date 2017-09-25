# Les tests automatisés

Au début, coder est assez facile. Au fil du temps, les humains n'ont pas la *capacité cognitive* d'imaginer tous les cas possibles. Il arrive alors que dans certaines conditions, le logiciel ne se comporte pas comme attendu (bug).

Une manière de trouver les bugs est d'attendre que le logiciel soit dans les mains de l'utilisateur final qui va tester. Mais ce processus est long et coûteux :
* Il faut shipper le logiciel (temps entre dev et release non nul)
* Les utilisateurs perdent du temps à comprendre que c'est un bug (coût) et ne remontent pas toujours les bugs (perte de qualité)
* Il faut ensuite corriger le bug, sortir une nouvelle version, etc.
* Les utilisateurs subissent le bug pendant la correction + release (coût)

Les tests automatisés permettent de **réduire le coût** de cette *feedback loop* en trouvant les bugs *avant* que le logiciel ne soit dans les mains des humains.

L'objectif est de formaliser sous la forme de code executable les attentes que l'on a envers le logiciel et de vérifier que le logiciel fait ce qui est demandé.
On peut faire tourner ces tests aussi souvent qu'utile, car le temps machine ne coûte rien à côté du coût humain.
Toutefois la production de ce nouveau code a un coût. C'est un **investissement**. Cet investissement est **rentable** si l'on a économisé plus que ce que la production des tests a coûté.


## Tests unitaires

On teste une fonction (ou une classe).

Simple à écrire, mais peu de chance de choper un bug sur du code simple.

````js
test(function(){
    var nonParisMuseum = {
        ville: 'Bordeaux'
    };

    expect(isParisMuseum(nonParisMuseum)).to.be.false;
})
````


## Tests fonctionels

On code un scénario utilisateur et on vérifie que ça fonctionne comme attendu

```js
test(function(){
    load('https://google.com')
    .then(wait(5))
    .then(function(page){
        expect(page.title).to.equal('Google')
        expect(page.document.querySelector('input')).to.not.be(null)
    })
    .then(function(page){
        page.fill('input', 'yo').submit()
    })
    .then(wait(5))
    .then(function(page){
        expect(page.title).to.equal('Google - results - yo')
        expect(page.document.querySelectorAll('ul.results li')).to.have.length.above(2)
    })
})
```

## Circonstances

### Tests de non-régression

Test automatisé que l'on écrit pour tester un cas d'un bug découvert.