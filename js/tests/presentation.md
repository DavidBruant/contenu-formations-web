# Tests

`npm i mocha chai karma karma-chai karma-mocha karma-firefox-launcher karma-chrome-launcher karma-browserify --save-dev`


Créer un fichier `karma.conf.js`
```js
module.exports = karma =>
  karma.set({
    singleRun: true,
    frameworks: ['mocha', 'chai', 'browserify'],
    files: ['test/**/*.js'],
    colors: true,
    browsers: ['Firefox'],
    preprocessors: {
      'test/**/*.js': [ 'browserify' ]
    },
    browserify: {
      debug: true,
      transform: [ ['babelify', {presets: ['es2015']}] ]
    }
})
```

Dans `package.json`
```json
{
    "scripts": {
        "test": "karma start"
    },
    "devDependencies": {
        // ...
        "chai": "^4.1.2",
        "karma": "^1.7.1"
        // ...
    }
}
```

Créer un module qui exporte une fonction qui ...

`./isFrenchTweet.js`
```js
export default function isFrenchTweet(tweet){
    return tweet.lang === 'fr';
}
```


`test/isFrenchTweet.test.js`
```js
import {expect} from 'chai'
import isFrenchTweet from '../isFrenchTweet.js'

describe('isFrenchTweet', () => {
    it('should return true if tweet.lang is fr', () => {
        const tw = {
            text: 'salut !',
            lang: 'fr'
        }

        expect( isFrenchTweet(tw) ).to.be.true
    })
    it('should return false if tweet has no lang', () => {
        const tw = {
            text: 'salut !'
        }

        expect( isFrenchTweet(tw) ).to.be.false
    })
    it('should return false if tweet.lang is en', () => {
        const tw = {
            text: 'salut !',
            lang: 'en'
        }

        expect( isFrenchTweet(tw) ).to.be.false
    })
    it('should return true if tweet.lang is fr_ca', () => {
        const tw = {
            text: 'salut !',
            lang: 'fr_ca'
        }

        expect( isFrenchTweet(tw) ).to.be.true // oops
    })
})
```

`npm test`


Test de DOM

```js
import createTweetLi from '../createTweetLi'

describe('createTweetLi', () => {
    it('should throw when no argument is passed', () => {
        expect( 
            () => createTweetLi(); 
        ).to.throw();
    })

    it('should create an empty <li> if an empty object is passed', () => {
        const li = createTweetLi({});

        expect( li ).to.be.an.instanceof(HTMLLIElement)
        expect( li.textContent ).to.equal('');
    })

})
```




## Code coverage

Attention ! Métrique dangereuse !

## Tests de non-régression

1. on a observé un bug
2. on écrit un test qui échoue et démontre le bug
3. on corrige le bug (et le test passe)


## Tests automatisés sur vrais navigateurs

https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai