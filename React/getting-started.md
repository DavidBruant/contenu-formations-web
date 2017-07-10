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
watchify main-react.js -o bundle-react.js -t [ babelify --presets [ es2015 ] ] -d -v
````


`React.createElement(Composant, attributs/données, enfant1, enfant2, ...)`
`Enfant : string | Element | Enfant[]`

Créer un composant qui prend un objet avec une propriété 'tweets' (tableau d'objets tweet : {tweets: tweets}) et retourne un élément 'ol' avec ses enfants 'li'.

import TweetsOl from './composant1.js';

// ...
ReactDOM.render(
    React.createElement(TweetsOl, {tweets: tweets}),
    document.body
)


````css
label{
    display: block;
}

````




````js
// composant.js
function Form(data){
    return React.createElement('form', {
        onSubmit: function(e){
            e.preventDefault();
            console.log('submit', e);
            var name = e.target.querySelector('input[name="name"]').value;

            console.log(name);

            var country = ...;

            data.onUserFormSubmit({
                name: name,
                country: country
            })
        }
    },
        React.createElement('label', {},
            'Name',
            React.createElement('input', {
                name: 'name',
                defaultValue: data.name,
                disabled: data.readonly,
                onChange:
            })
        ),
        React.createElement('label', {},
            'Country',
            React.createElement('select', {name: 'country'},
                data.countries.map(function(c){
                    return React.createElement('option', {value: document}, c)
                })
            )
        ),
        React.createElement('button', {type: 'submit'}, 'Yo')
    )
}

// main.js
var store = {
    countries: ['a', 'b', 'c'],
    country: 'a',
    name: 'dav',
    readonly: false
}

function render(){
    ReactDOM.render(
        React.createElement(Form, Object.assign(
            {
                onUserFormSubmit: function(formData){
                    store = Object.assign(store, formData);
                    render();
                },
                onChangeNiania
            },
            store
        )),
        document.body
    )
}

render();

setTimeout(function(){
    store.readonly = true;
    render()
}, 5*1000)
`````