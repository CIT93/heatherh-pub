const object1 = {
  a: "somestring",
  b: 42,
  c: "sunshine",
  d: "pikachu"
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// const add = function(...a) {
//   return 2 + a[3];
// }

// const result = add(1,2,3,4);
// console.log(result);

(function(){
 console.log("inside function");
})();

const a = 3;
(function(a){
  console.log(a);
 })(a);

 const add = a => 2 + a;
// const result = add(100);
console.log(add(20));

function multiply(a, b = 5) {
  return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5