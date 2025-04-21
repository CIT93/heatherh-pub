const object1 = {
  a: "somestring",
  b: 42,
  c: "sunshine",
  d: "pikachu"
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

const add = function(...a) {
  return 2 + a[3];
}

const result = add(1,2,3,4);
console.log(result);

(function(){
 console.log("inside function");
})();

const a = 3;
(function(a){
  console.log(a);
 })(a);