'use strict';

var button = document.querySelector('button');

console.log('coucou !');

button.addEventListener('click', function(e){
    console.log('click !', e);
    
    /*var title2 = document.createElement('h2');
    title2.textContent = 'Bonjour !';

    document.body.appendChild(title2);*/
    
    /*var bordeaux3dImage = document.querySelector('img.bdx3d');
                    // document.querySelectorAll('img.bdx3d');
    
    console.log(bordeaux3dImage);
    
    bordeaux3dImage.remove();*/
    
    //button.classList.add('active');
    //button.classList.remove/delete('active');
    button.classList.toggle('active');
    
});

