  const FORM = document.getElementById("form");
const DIV1 = document.getElementById("workoutOutput");
const DIV2 = document.getElementById("asyncOutput");

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  DIV1.textContent = `Start ${FORM.workout.value} < > Goal reps is ${FORM.reps.value}`;

  function repTime(callback) {
    setTimeout(() => {
      const repStop = FORM.workout.value;
      callback(repStop);
    }, FORM.seconds.value * 1000);
  }

  function stopWorkout(repStop) {
    DIV2.textContent = `Stop ${repStop}`;
  }

  repTime(stopWorkout);
  // console.log(`${FORM.seconds.value}`);
});

