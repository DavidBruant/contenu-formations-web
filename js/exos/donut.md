* https://bl.ocks.org/mbostock/3887193
* https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/liste-musees-de-france-a-paris.json

```js
function svgElement(name){
    return document.createElementNS('http://www.w3.org/2000/svg', name)
}
```

```js
import {pie, arc} from 'd3-shape';

var muséesParis = [];
var muséesByArrond = groupBy(muséesParis, getArrondissement);

var pieData = Object.keys(muséesByArrond).map(function(arr, i){
    return {
        arr: arr, // number
        count: muséesByArrond[arr];
    }
})

var p = pie()
.value(function(m){ return m.count })
.sort(function(m1, m2){ return m2.arr - m1.arr })

const pieParts = p(data);

pieParts.map(function(pp){
    var d = arc()({
        innerRadius: 0,
        outerRadius: 100,
        startAngle: pp.startAngle,
        endAngle: pp.endAngle
    }); 
})
```


Donut.js
```js


function(data, onPartSelected){

    part.addEventListener('click', function(e){
        onPartSelected({
            arrondissement: arrondissement
        });
    })

}

```