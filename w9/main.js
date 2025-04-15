import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM } from "./global.js";
import { cfpData, saveLS, getLS } from "./storage.js";


// const FORM = document.getElementById("form");
// const output = document.getElementById("output");
// const cfpData = [];



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

renderTbl(cfpData);

FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const firstNameIsValid = document.getElementById('firstname').value !== '';
  const lastNameIsValid = document.getElementById('lastname').value !== '';
  if (firstNameIsValid && lastNameIsValid) {
    alert('Form is valid. You can proceed with submitting the form to the server.');
    }
  const houseHoldM = parseInt(FORM.housem.value);
  const houseS = FORM.houses.value;

  start(houseHoldM, houseS);
  // output.innerHTML = "";
  saveLS(cfpData);
  renderTbl(cfpData)
  FORM.reset();
});

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  
  if (field === '') {
  fieldError.textContent = `${fieldId} is required`;
  event.target.classList.add('invalid');
  } else {
  fieldError.textContent = '';
  event.target.classList.remove('invalid');
  }
  };

document.getElementById('firstname').addEventListener('blur', validateField);
document.getElementById('lastname').addEventListener('blur', validateField);

// window.addEventListener("load", (e) => {
//   renderTbl(cfpData);
  // console.log("page is fully loaded");
// });
