const FORM = document.getElementById("form");
const output = document.getElementById("output");
const cfpData = [];

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  
  return houseHoldPoints;
  
}

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function start(houseHoldMembers, houseSize, firstName, lastName) {

  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  
  cfpData.push({
    houseM: houseHoldMembers,
    houseSiz: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfptotal: total,
    fname: firstName,
    lname: lastName,
  });
}

function displayOutput() {
  for (obj of cfpData) {
    const newP = document.createElement("p");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Hello ${obj.fname} ${obj.lname}. Your Carbon Footprint total is ${obj.cfptotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in household and size of home`;
    newP.textContent = `This number is based on ${obj.houseM} people (score: ${obj.houseMPTS}) in a house size of ${obj.houseSiz} (score: ${obj.houseSPTS})`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);

  }
}


FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const houseHoldM = parseInt(FORM.housem.value);
  const houseS = FORM.houses.value;
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  start(houseHoldM, houseS,firstName,lastName);
  output.innerHTML = "";
  displayOutput();
  FORM.reset();
});