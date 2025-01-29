
let carbonfootprintPoints = 0;
// const numberInHousehold = 2;

function insideF(numberInHousehold) {
  console.log(`Inside the function`);
  if (numberInHousehold === 1){
    carbonfootprintPoints = carbonfootprintPoints + 14;
} else if (numberInHousehold === 2) {
    carbonfootprintPoints = carbonfootprintPoints + 12;
} else if (numberInHousehold === 3) {
    carbonfootprintPoints = carbonfootprintPoints + 10;
  }
  else if (numberInHousehold === 4) {
    carbonfootprintPoints = carbonfootprintPoints + 8;
  }
  else if (numberInHousehold === 5) {
    carbonfootprintPoints = carbonfootprintPoints + 6;
  }
  else if (numberInHousehold === 6) {
    carbonfootprintPoints = carbonfootprintPoints + 4;
  }
  else if (numberInHousehold > 6) {
    carbonfootprintPoints = carbonfootprintPoints + 2;
  }
 else {
  console.log("no points updated");
  }
  console.log(`Your household has ${numberInHousehold} people and your carbon footprint points are ${carbonfootprintPoints}.`);
}

insideF(3);
insideF(4);
insideF(5);