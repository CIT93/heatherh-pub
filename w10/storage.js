
const saveLS = (cfpData) => {
  const serializedArr = JSON.stringify(cfpData);
  localStorage.setItem("cfp", serializedArr);
}

const getLS = (...a) => {
  const retrievedArr = localStorage.getItem("cfp");
  if (retrievedArr !== null) {
    return JSON.parse(retrievedArr);
  } else {
    return [];
  }
  
}
const cfpData = getLS();
console.log(getLS());
// makes an empty array


export {cfpData, saveLS, getLS};