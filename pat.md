
```bash
npm install -g serve

serve
```

Morceaux de JS utiles:

```js
// parser du XML
const doc = (new DOMParser()).parseFromString(str, 'text/xml')

// Trouver les éléments de patrimoine
const pats = Array.from(doc.querySelectorAll('PATRIMOINE'))
console.log(pats.length); // 301

// parser une date
import moment from 'moment';

const d = moment(DtAcquiBien, 'YYYY-MM-DD', 'en');
const timestamp = d.unix(); // typeof timestamp === 'number'

// d3-array
import {min, max} from 'd3-array';


// d3-scale
import {scaleLinear} from 'd3-scale';

const timestampToPixelOffset = scaleLinear()
    .domain([dateMin, dateMax])
    .range([0, 1000]);

const offset = timestampToPixelOffset(date);

console.log(
    new Set(pats.map(p => p.querySelector('NumInventaire').getAttribute('V'))).size
)
```

```html
<div class="timeline"> <!-- position: relative; border-left; height: 1000px -->
    <div class="marker">
        <!-- 
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 10px;
        height: 10px;
        background-color: steelblue;
        transform: translate(${offset}px, ${i*11}px) 
        -->
    </div> 
</div>
```

```js
'NumInventaire', 'LibBien', 'MtValAcquiBien', 'DtAcquiBien'
```




