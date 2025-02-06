const cfpData = [];

function householdSize(numberHouse) {
  
  let householdPoints = 0;
  if (numberHouse === 1) {
    householdPoints = 14;
  } else if (numberHouse === 2) {
    householdPoints = 12;
  } else if (numberHouse === 3) {
    householdPoints = +10;
  } else if (numberHouse === 4) {
    householdPoints = +8;
  } else if (numberHouse === 5) {
    householdPoints = +6;
  } else if (numberHouse === 6) {
    householdPoints = +4;
  } else if (numberHouse > 6) {
    householdPoints = +2;
  } else {
    console.log("no points updated");
  }

  
  return householdPoints;
}
function carbonHouse(typeHouse) {
 
  let typeHousePTS = 0;
  if (typeHouse === "large") {
    typeHousePTS = 10;
  } else if (typeHouse === "medium") {
    typeHousePTS = 7;
  } else if (typeHouse === "small") {
    typeHousePTS = 4;
  } else if (typeHouse === "apartment") {
    typeHousePTS = 2;
  }
  
  return typeHousePTS;
}


function start(people,size) {
  const houseHoldPTS = householdSize(people);
  const houseSizePTS = carbonHouse(size);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([people,size,houseHoldPTS, houseSizePTS, total]);
  
}

function displayOutput(){
  
}

start(5, "medium");
start (3, "large");
start(2, "small");
start(1, "medium");
start(4, "large");
start(6, "large");
start(6, "small");
start(3, "medium");
start(2, "large");

displayOutput();

