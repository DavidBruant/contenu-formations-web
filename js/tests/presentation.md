# Tests

npm install mocha chai chai-as-promised --save-dev

Dans `package.json`, "scripts"
    "test": "mocha test"

/*
    test/index.html
*/
https://mochajs.org/#running-mocha-in-the-browser
Rajouter <script src="http://chaijs.com/chai.js"></script>

/*
    test/index.js
*/
"use strict";

https://mochajs.org/#getting-started
Remplacer `var assert = require('assert');` par `var assert = chai.assert;

/*
    test/getContents.js
    
    // watchify test/getContents.js -o test/browserify-tests.js -v -d
    // ajouter <script src="browserify-tests.js"></script>
*/
"use strict";

var chai = require('chai')
chai.use(require('chai-as-promised'));
var expect = chai.expect;

var getContents = require('../getContents');

describe('getContents', function () {
    it('should return a resolving promise if passed a valid URL', function () {
        var tweetsP = getContents("https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets.json");

        return expect(tweetsP).to.eventually.be.an('array');
    });
});
