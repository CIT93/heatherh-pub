import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM } from "./global.js";
import { cfpData, saveLS, getLS } from "./storage.js";

const firstnameEL = document.getElementById("firstname");
const lastnameEL = document.getElementById("lastname");
const submitEL = document.getElementById("submitError");

function start(firstName, lastName, houseHoldMembers, houseSize) {

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

firstnameEL.addEventListener('blur', validateField);
lastnameEL.addEventListener('blur', validateField);

FORM.addEventListener("submit", function(e){
  e.preventDefault();
  submitEL.textContent = "";
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const firstNameIsValid = firstnameEL.value !== '';
  const lastNameIsValid = lastnameEL.value !== '';
  if (firstNameIsValid && lastNameIsValid) {
    const houseHoldM = parseInt(FORM.housem.value);
    const houseS = FORM.houses.value;
    start(firstName, lastName, houseHoldM, houseS);
    saveLS(cfpData);
    renderTbl(cfpData)
    FORM.reset();
  }
   else {
    submitEL.textContent = "Form requires first name and last name";
  }
  // const houseHoldM = parseInt(FORM.housem.value);
  // const houseS = FORM.houses.value;

  // start(houseHoldM, houseS);
  // // output.innerHTML = "";
  // saveLS(cfpData);
  // renderTbl(cfpData)
  // FORM.reset();
});



// window.addEventListener("load", (e) => {
//   renderTbl(cfpData);
  // console.log("page is fully loaded");
// });
