// console.log("I am surrounded by sleeping animals. Gotta love taking classes from home :)")

// 1. Count the members of your household

const houseMembers = 2;

// 2. Consider the size of your home.

const homeSize = 7;

// 3. Evaluate your food choices

const foodChoices = 4;

// 4. Examine your water consumption

const waterConsumption = 2;

// 5. Determine how many household purchases you make each year.

const housePurchases = 6;

// 6. Consider how much waste you produce.

const myWaste = 20;

// 7. Identify the amount of waste that you recycle.

const myRecycle = 24;

// 8. Tally up your annual transportation scores.

const annualTransportation = 6;

// 9. Add up your points.

const carbonFootprint = houseMembers + homeSize + foodChoices + waterConsumption + housePurchases + myWaste + myRecycle + annualTransportation;

// 10. Calculating Your Carbon Footprint Points - method 1

const h2Element = document.querySelector("h2");
h2Element.textContent = carbonFootprint;