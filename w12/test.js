
const me = {
  name: "Sunshine",
  hairColor: "yellow",
  location: "Redlands",
  sleepScore: 80,
  introduce: function() {
    console.log(`Name: ${this.name} Hair color: ${this.hairColor} location: ${this.location}`)
  },
}

const you = {
  name: "Pikachu",
  hairColor: "grey",
  location: "Riverside",
  sleepScore: 50,
  introduce: function() {
    console.log(`Name: ${this.name} Hair color: ${this.hairColor} location: ${this.location}`)
  },
}
// me.introduce();
// you.introduce();

class Human {
  constructor(name, hairColor, location, sleepScore) {
    this.name = name
    this.hairColor = hairColor
    this.location = location
    this.sleepScore = sleepScore
  }
introduce() {
  console.log(`Name: ${this.name} Hair color: ${this.hairColor} location: ${this.location}  Sleep score: ${this.sleepScore}`);
}
}

const pikachu = new Human("pikachu", "grey", "Riverside", 50);
const sunshine = new Human("Sunshine", "yellow", "Redlands", 80)

sunshine.introduce();
pikachu.introduce();
sunshine.hrv = 70;


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