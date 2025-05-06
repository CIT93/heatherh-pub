const FORM = document.getElementById("form");
const DIV1 = document.getElementById("workoutOutput");
const DIV2 = document.getElementById("asyncOutput");


function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("good data")
    }, 100)

  })
}
function fun2() {
  console.log("function 2")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("😍");
    }, 100)

  })
}
function onSuccess(data) {
    console.log(`Success: ${data}`);
  }
  
  function onError(errorCode) {
    console.log(`ERROR: ${errorCode}`);
  }

  function inTheEnd() {
    console.log("finally we are done")
  }
  fun1()
  .then(fun2)
  .then(onSuccess)
  .catch(onError)
  .finally(inTheEnd)












FORM.addEventListener("submit", (e) => {
  e.preventDefault();
});

  