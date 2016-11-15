## React

On définit des composants

````bash
npm install react react-dom --save
````

composant1.js
```js
import React from 'react';

export default function(data){
    return React.createElement('h1', {}, data.titre);
}
```

main-react.js
````js
import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './composant1.js';

ReactDOM.render(
    React.createElement(Comp, {titre: 'Yo !'}),
    document.body
)
````

Créer `react.html`

````
watchify main-react.js -o bundle-react.js -t rollupify -d -v
````


React.createElement(Composant, attributs/données, enfant1, enfant2, ...)
Enfant : string | Element | Enfant[]

Créer un composant qui prend un objet avec une propriété 'tweets' (tableau d'objets tweet : {tweets: tweets}) et retourne un élément 'ol' avec ses enfants 'li'.

import TweetsOl from './composant1.js';

// ...
ReactDOM.render(
    React.createElement(TweetsOl, {tweets: tweets}),
    document.body
)