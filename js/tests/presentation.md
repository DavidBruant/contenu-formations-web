# Tests

## TODO

`npm install jest babel-jest --save-dev`


Dans `package.json`
```json
{
    "scripts": {
        "test": "jest"
    },
    "babel": {
        "presets": ["es2015"]
    }
}
```


`test/commitsToAuthorMap.test.js`
```js
import commitsToAuthorMap from '../commitsToAuthorMap'

test('Map vide quand tableau vide', () => {
    const commits = []
    const authorMap = commitsToAuthorMap(commits);

    expect(authorMap).toEqual(expect.any(Map));
    expect(authorMap.size).toBe(0);
});
```

`npm test`


## Code coverage

Attention

## Tests de non-régression

1. on a observé un bug
2. on écrit un test qui échoue et démontre le bug
3. on corrige le bug (et le test passe)


## Tests automatisés sur vrais navigateurs

https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai