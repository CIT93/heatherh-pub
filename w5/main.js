const cfpData = [];

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
// refactor the start function to store the data in an object

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;

  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfptotal: total,
  });

  function displayOutObj(obj) {
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint total is ${obj.cfptotal}`;
    newP.textContent = `This number is based on ${obj.houseM} people (score: ${obj.houseMPTS}) in a house size of ${obj.houseS} (score: ${obj.houseSPTS})`;
    output.appendChild(newH2);
    output.appendChild(newP);
  }
}
// function start(houseHoldMembers, houseSize) {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePts = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePts;
//   cfpData.push([
//     houseHoldMembers,
//     houseSize,
//     houseHoldPTS,
//     houseSizePts,
//     total,
//   ]);
// }

function displayOutput() {
  for (obj of cfpData) {
    console.log(obj);
    const output = document.getElementById("output");
    //         const newP = document.createElement("p");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint total is ${obj.cfptotal}`;
    //         const newH3 = document.createElement("h3");
    //         newH3.textContent = `Based on number in household and size of home`;
    //         newP.textContent = `This number is based on the number of people in the household of (score: ${arr[0]})`;
    //         newP.textContent += ` and a (score: ${arr[1]}) size of home`;
    //         output.appendChild(newH3);
    output.appendChild(newH2);
    //         output.appendChild(newP);
  }
}

start(1, "apt");
start(2, "small");
start(3, "medium");
start(4, "large");
console.log(cfpData);
displayOutput();
//refactor displayOutput() with a for loop.

// function displayOutput() {
//   for (i = 0; i < cfpData.length; i++) {
//     const output = document.getElementById("output");
//     const newP = document.createElement("p");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint total is ${cfpData[i][4]}`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = `Based on number in household and size of home`;
//     newP.textContent = `This number is based on the number of people in the household of (score: ${cfpData[i][2]})`;
//     newP.textContent += ` and a (score: ${cfpData[i][3]}) size of home`;
//     output.appendChild(newH3);
//     output.appendChild(newH2);
//     output.appendChild(newP);
//   }
// }
