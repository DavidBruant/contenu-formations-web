# Web Design

Quel est le contenu ?
Comment présenter le contenu ?

Notion de charte graphique ("styleguide")

http://www.bbc.co.uk/gel/guidelines

Comment définit-on la structure ?
Quels sont les composants utilisés dans plusieurs pages ?



Contenu => définition de la structure + composants => HTML + CSS + (bootstrap)

## SASS

http://sass-lang.com/guide

* Variables CSS
* nesting ("imbrication")
* import


## Exercice : création de composants

Pour chaque composant, une personne va :
* Créer une page HTML vierge (+ bootstrap (seulement le CSS)) avec un <main class="component-container">
* Créer son composant à l'intérieur
    * Dont un fichier de CSS spécifique au composant





# Vrac

## Pagination

<pagination>
    <li><a href=> 1 </a></li>
    <li><a href=> 1 </a></li>
    <li><a href=> 1 </a></li>
    <li><a href=> 1 </a></li>
</pagination>

<ul class="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>

CSS :
ul.pagination{
    list-style: none;
}
ul.pagination li{
    width: 20px;
    height: 20px;
}
ul.pagination li a  jo h j k {

}

SASS : 

ul.pagination{
    
    list-style: none;

    li{
        width: 20px;
        height: 20px;

        a{


        }
    }

}


## Carousel

<carousel>
    <li> <img src=></li>
    <li> <img src=></li>
    <li> <img src=></li>
</carousel>


