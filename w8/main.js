import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";


const FORM = document.getElementById("form");
const output = document.getElementById("output");
const cfpData = [];



function start(houseHoldMembers, houseSize) {

  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  cfpData.push({
    firName: firstName,
    lasName: lastName,
    houseM: houseHoldMembers,
    houseSiz: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfptotal: total,
  });
}



FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const houseHoldM = parseInt(FORM.housem.value);
  const houseS = FORM.houses.value;

  start(houseHoldM, houseS);
  output.innerHTML = "";
  renderTbl(cfpData)
  FORM.reset();
});

