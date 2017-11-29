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

Créer une module qui exporte une fonction qui prend un tableau d'éléments &lt;PATRIMOINE> et retourne les dates min et max

```js
export default function minMaxPatrimoineDate(pats){

    return {
        min: // ... 
        max: // ...
    }
}
```


`test/minMaxPatrimoineDate.test.js`
```js
import minMaxPatrimoineDate from '../minMaxPatrimoineDate'

test("minMaxPatrimoineDate retourne la bonne date s'il n'y en a qu'une", () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?> <DocumentBudgetaire xsi:schemaLocation="http://www.minefi.gouv.fr/cp/demat/docbudgetaire Actes_budgetaires___Schema_Annexes_Bull_V15\DocumentBudgetaire.xsd" xmlns="http://www.minefi.gouv.fr/cp/demat/docbudgetaire" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <Budget>
            <Annexes>
                <DATA_PATRIMOINE>
                    <PATRIMOINE> <CodVariPatrim V="01"/> <CodEntreeSorti V="E"/> <CodModalAcqui V="01"/> <LibBien V=" 2016O00376 - MICROSOFT VISIO PROFESSIONAL"/> <MtValAcquiBien V="1339.20"/> <MtCumulAmortBien V="0.00"/> <MtAmortExer V="0.00"/> <DureeAmortBien V="5"/> <NumInventaire V="2016O00376"/> <DtAcquiBien V="2016-11-16"/> <MtVNCBien3112 V="0.00"/> <MtVNCBienSorti V="0.00"/> <MtPrixCessBienSorti V="0.00"/> </PATRIMOINE>
                </DATA_PATRIMOINE>
            </Annexes>
        </Budget>
    </DocumentBudgetaire>`
    const authorMap = commitsToAuthorMap(commits);

    expect(authorMap).toEqual(expect.any(Map));
    expect(authorMap.size).toBe(0);
});
```

`npm test`


## Code coverage

Attention ! Métrique dangereuse !

## Tests de non-régression

1. on a observé un bug
2. on écrit un test qui échoue et démontre le bug
3. on corrige le bug (et le test passe)


## Tests automatisés sur vrais navigateurs

https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai