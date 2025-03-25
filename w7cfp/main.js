import { renderTbl, renderTblHeading } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";

// import (renderTbl)
const FORM = document.getElementById("form");

// const lastName = FORM.lastname.value;
// const output = document.getElementById("output");

// function start(houseHoldMembers, houseSize) {

// const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
// const houseSizePts = determineHouseSizePts(houseSize);
// const total = houseHoldPTS + houseSizePts;
// const firstName = FORM.firstname.value;
// cfpData.push({
//   houseM: houseHoldMembers,
//   houseSiz: houseSize,
//   houseMPTS: houseHoldPTS,
//   houseSPTS: houseSizePts,
//   cfptotal: total,
// });
// fnameFoot.push({
//   fName: firstName,
//   cfptotal: total,
// });
// console.log(firstName);
// console.log(total);
// }

// function displayOutput() {
//   for (obj of cfpData) {
//     const newP = document.createElement("p");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint total is ${obj.cfptotal}`;

//     newP.textContent = `This number is based on ${obj.houseM} people (score: ${obj.houseMPTS}) in a house size of ${obj.houseSiz} (score: ${obj.houseSPTS})`;
//     output.appendChild(newH2);

//     output.appendChild(newP);

//   }
// }

renderTblHeading();

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const cfpData = [];
  // const fnameFoot = [];
  const houseHoldMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  console.log(houseHoldPTS);
  console.log(houseSizePts);
  const total = houseHoldPTS + houseSizePts;
  // const numTotal = parseInt(total);
  const firstName = FORM.firstname.value;
  // cfpData.push({
  //   houseM: houseHoldMembers,
  //   houseSiz: houseSize,
  //   houseMPTS: houseHoldPTS,
  //   houseSPTS: houseSizePts,
  //   cfptotal: total,
  // });
  // fnameFoot.push({
  //   fName: firstName,
  //   cfptotal: total,
  // });

  // const houseHoldM = parseInt(FORM.housem.value);
  // const houseS = FORM.houses.value;
  // start(houseHoldM, houseS);
  // output.innerHTML = "";
  //displayOutput();
  // renderTblHeading();
  renderTbl(firstName, total);
  // console.log(fnameFoot);
  console.log(firstName);
  console.log(total);
  FORM.reset();
});
