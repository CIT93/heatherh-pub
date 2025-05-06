
// getCoffee();
// singASong();
// function getCoffee() {
//   console.log("getting coffee async");
//   doAsyncSyncStuff(() => {
//     console.log("coffee is here async");
//   });
  
// }
// function singASong() {
//   console.log("start singing...");
// }
// async function doAsyncSyncStuff(callback) {
//   setTimeout(() => {
//     callback();
//   },2500);

// }
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   console.log("button clicked");
// });

// console.log("start script");

// setTimeout(() => {
//   console.log("timeout 1")
// }, 3000)

// setTimeout(() => {
//   console.log("timeout 2")
// }, 1000)

// console.log("end script");

// console.log("1");
// setTimeout(() => {
//   console.log("2")
// }, 0);
// console.log("3");

console.log("start script");
setTimeout(() => {
  console.log("setTimeout")
}, 0)
Promise.resolve().then(() => {
  console.log("promise 1");
}).then(() => {
  console.log("promise 2");
})
console.log("end script");