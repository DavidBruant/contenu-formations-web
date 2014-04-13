var o2 = {
    a: 25,
    
    get r(){
        return this.a + Math.random();
    },
    set r(v){
        this.a = v;
    }
};

o2.a

var a = 25;

//ObjectViz(o2)

var DEFAULT_CONFIG = {
    host: 'localhost',
    port: 80
};


var conf1 = Object.create(DEFAULT_CONFIG);
conf1.host = 'google.com';

ObjectViz(conf1)

// console.log(a.map(function(e){ return e*e }))