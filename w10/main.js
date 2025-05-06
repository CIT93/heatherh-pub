import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { cfpData, saveLS, getLS } from "./storage.js";

const start =  (firstName, lastName, houseHoldMembers, houseSize) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
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

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

FORM.addEventListener("submit", e => {
  e.preventDefault();
  SUBMIT.textContent = "";
  
  if (FNAME.value !== '' && LNAME.value !== '') {
    
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveLS(cfpData);
    renderTbl(cfpData)
    FORM.reset();
  }
   else {
    SUBMIT.textContent = "Form requires first name and last name";
  }

});
console.log("will this break the debugger?");

