function calcPension(salary, currentMoney, annualInterest, age) {
  let monthlyDeposit = salary * 0.125;
  console.log(`monthlyDeposit: ${monthlyDeposit}`);
  let total = currentMoney;
  for (let index = 0; index + age <= 67; index++) {
    if (index + age === 55) {
      //afger this age the salary reduce by 30%
      monthlyDeposit = monthlyDeposit * 0.7;
    }
    const yearIncrease = (total + monthlyDeposit * 12) * ((100 + annualInterest) / 100) - total;
    console.log(`age: ${age + index}, year increase: ${yearIncrease}, total: ${total}`);
    total += yearIncrease;
  }
  console.log(`total: ${total}`);
}

function calcExtension(salary, isFullExtension, currentMoney, annualInterest, age) {
  let monthlyDeposit = isFullExtension ? salary * 0.1 : 15700 * 0.1;
  console.log(`monthlyDeposit: ${monthlyDeposit}`);
  let total = currentMoney;
  for (let index = 0; index + age <= 67; index++) {
    if (index + age === 55) {
      //afger this age the salary reduce by 30%
      monthlyDeposit = monthlyDeposit * 0.7;
    }
    const yearIncrease = (total + monthlyDeposit * 12) * ((100 + annualInterest) / 100) - total;
    console.log(`age: ${age + index}, year increase: ${yearIncrease}, total: ${total}`);
    total += yearIncrease;
  }
  console.log(`total: ${total}`);
}

function calcSavings(deposite, currentMoney, annualInterest, years) {
  let monthlyDeposit = deposite
  console.log(`monthlyDeposit: ${monthlyDeposit}`);
  let total = currentMoney;
  for (let index = 0; index < years; index++) {   
    const yearIncrease = (total * ((100 + annualInterest) / 100)) + (monthlyDeposit * 12) - total;
    console.log(`years: ${years + index}, year increase: ${yearIncrease}, total: ${total}`);
    total += yearIncrease;
  }
  console.log(`total: ${total}`);
}

// calcExtension(33000, false, 130000, 6, 38);
// calcPension(33000, 340000, 4, 38);
calcSavings(15000, 540000, 5, 3);
