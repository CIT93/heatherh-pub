
let carbonfootprintPoints = 0;

function insideF(numberInHousehold) {
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

// If you have a large house, then add 10 points to your score.
// If you have a medium-sized house, then add 7 points.
// If you have a small house, then add 4 points.
// If you live in an apartment, then add 2 points.

function carbonHouse(typeHouse) {
  if (typeHouse === "large") {
    carbonfootprintPoints = carbonfootprintPoints + 10;
  }
  else if (typeHouse === "medium") {
    carbonfootprintPoints = carbonfootprintPoints + 7;
  }
  else if (typeHouse === "small") {
    carbonfootprintPoints = carbonfootprintPoints + 4;
  }
  else if (typeHouse === "apartment") {
    carbonfootprintPoints = carbonfootprintPoints + 2;
  }
  console.log(`Your house type is ${typeHouse} and your carbon footprint points are ${carbonfootprintPoints}.`);
}

carbonHouse("apartment");