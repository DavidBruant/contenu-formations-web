Objectif : afficher des stats sur les tweets d'un profil

    * % retweet (retweeted_status)

    * % tweet avec liens (entities.urls)

# Serveur & API Twitter
1) Installer Node.js http://nodejs.org/

    node --version (0.10)

    npm --version (1.3.x)

2) créer dosser + npm init
3) installer dépendances

    npm install request --save

4) Créer une app Twitter à partir de http://dev.twitter.com/ (récupérer API key & API secret) http://iag.me/socialmedia/how-to-create-a-twitter-app-in-8-easy-steps/
5) Mettre dans un dossier lib/

    https://github.com/DavidBruant/Twitter-communities/blob/master/lib/twitter-application-only-auth.js

    https://github.com/DavidBruant/Twitter-communities/blob/master/lib/twitterAPI.js

6) Ajouter une fonction getTweets à twitterAPI.js https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline

    getTweets(username) -> Promise<Tweets[]>

7) Créer un fichier index.js qui va chercher les tweets de quelqu'un et calcule des stats sur les tweets d'une personne

    node index.js

8) Stocker les 200 tweets dans un fichier tweets.json

    http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback

    JSON.stringify(obj, null, 3)

# Client
9) npm install -g http-server

    http-server

    ouvrir http://localhost:8080/front

10) Dépendances

    * Polyfill Promise https://github.com/jakearchibald/es6-promise/#downloads ==> front/lib/promise.js

    * React http://facebook.github.io/react/downloads.html#react-0.10.0-development  ==> front/lib/react.js

11) Créer un index.html

    Récupérer les tweets via xhr (XMLHttpRequest) et les afficher dans la console.

    https://github.com/DavidBruant/contenu-formations-web/blob/9cb3ac2fc1f89083ebed123f49c40e6e7561f1c8/js/ECMAScript/Promise.js#L1-L13

12) Créer un composant TweetList(Tweet[]) ~ul
13) Créer un composant Tweet(Tweet) ~li text
14) Afficher des stats sur les tweets

    * % RT, % links,

    * "last x days"

    * new Date(tweet.created_at)

    * aujourd'hui : new Date()

    * myDate.getTime() // ms since Jan 1st 1970

    * Math.floor/ceil/round

    * var ONE_DAY = 1000*60*60*24; // ms

    * rendre "last x days" interactif

    * React.createClass({

    getInitialState: function(){

    return {active: false};

    },

    render: function(){

    // this.props

    // this.state

    }

    })

    * React.DOM.span({

    className: "...",

    onMouseUp : function(e){

    // this.setState(...) // retire la classe "active"

    },

    onMouseDown : function(e){

    // this.setState(...) // ajoute la classe "active"

    downPageX : e.pageX

    downDays : this.state.days

    },

    onMouseMove : function(e){

    e.preventDefault();

    // ...

    var value = this.state.downDays + Math.floor( (e.pageX - this.state.downPageX)/10 );

    this.setState(...)

    this.props.dateChanged(value);

    }

    })
