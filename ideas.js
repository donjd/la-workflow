//Budeting hours on project based on established fees
function getHoursPerPerson(percentOfWork, phaseFee, feeRate) {
  return (percentOfWOrk * phaseFee) / feeRate;
}
const myHours = getHoursPerPerson(1, 7000, 140);

console.log(myHours);
