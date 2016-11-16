"use strict";

var mymap = L.map('mapid').setView([46.554, 2.709], 10);
L.tileLayer('http://api.tiles.mapbox.com/v3/ourson.k0i572pc/{z}/{x}/{y}.png', {
    attribution: 'OSM'
}).addTo(mymap);

// url des musées : 
// https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/liste-musees-de-france-a-paris.json

fetch('https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/liste-musees-de-france-a-paris.json')
.then(function(r){return r.json()})
.then(function(musees){
    console.log('musées', musees);

    // Marker : L.marker([50.5, 30.5]).addTo(map);
    // Afficher un marker pour le premier musée du tableau
    /*L.marker(musees[0].fields.coordonnees_, {
        icon: L.icon({
            iconUrl: 'aides-icon.png',
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowUrl: 'my-icon-shadow.png',
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        })
    }).addTo(mymap)*/

    // Afficher un marker pour chaque musée
    /**
     // Marche pas parce que données sales :
    musees.forEach(function(m){
        L.marker(m.fields.coordonnees_).addTo(mymap)
    })
     */

    var museesAvecCoords = musees.filter(function(m){
        return m.fields.coordonnees_ ;
    })

    museesAvecCoords.slice(0, 100).forEach(function(m){
        var coords = m.fields.coordonnees_;
        var marker = L.marker(coords);
        marker.addTo(mymap);

        // create popup quand on clique sur le marker
        // afficher adresse et lien vers le site web
        var a = '';

        if(m.fields.sitweb){
            a = '<a target="_blank" href="'+m.fields.sitweb+'">' +
                m.fields.nom_du_musee +
                '</a><br>';
        }

        marker.bindPopup(
            ( a ? a : m.fields.nom_du_musee) + 
            m.fields.adr
        );
    });

    var nextIndex = 0;

    setInterval(function(){
        mymap.panTo(
            museesAvecCoords[nextIndex].fields.coordonnees_,
            {duration: 2, animate: true}
        );
        nextIndex++;
    }, 3000)

    

})
.catch(function(err){
    console.error(err);
})


 