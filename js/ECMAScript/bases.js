/*if(e.getAttribute('hidden') === null){ // shown
  console.log('yep');
}
else{ // hidden
  console.log('nope');
}*/

var o1 = {a:5, b:8};
var o2 = {c:6, d:42};

var o3 = {a:5, b:12};
var o4 = {a:5, b:8};


console.log(o1 === o2, o1 === o3, o1 === o4);
console.log(o1.a === o4.a && o1.b === o4.b);