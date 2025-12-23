//Budeting hours on project based on established fees
function getHoursPerPerson(percentOfWork, phaseFee, feeRate) {
  return (percentOfWork * phaseFee) / feeRate;
}

const myHours = getHoursPerPerson(1, 7000, 140);

console.log(myHours);

//Create form that accepts each team member, their rate code (S, P, or D), the fee associated with the code (to be autopopulated), the perecentage of hours expected to work, and the total hours that person can work to stay in budget.
