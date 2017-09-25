# Tests

`npm install mocha chai chai-as-promised --save-dev`

/*
    test/index.html
*/
https://mochajs.org/#running-mocha-in-the-browser


/*
    test/isParisMuseum.js
    
watchify test/isParisMuseum.js -o test/bundle-tests.js -v -t [ babelify --presets [ es2015 ] ] -d
    
ajouter <script src="bundle-tests.js"></script>
*/

`test/isParisMuseum.js`
```js
"use strict";

import chai from 'chai';
import asPromised from 'chai-as-promised';

import isParisMuseum from '../isParisMuseum';

var expect = chai.expect;

chai.use(asPromised);

describe('isParisMuseum', function () {
    it('should return false for an empty object', function () {
        var museum = {};
        
        expect(isParisMuseum(museum)).to.be.false;

        /*(function() {
            isParisMuseum(museum)
        }).should.throw();*/
    });
});
```


```js
function isParisMuseum(m){
    return !!(m && m.fields && m.fields.ville && m.fields.ville.toUpperCase() === 'PARIS')
}
```