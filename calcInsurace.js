function calc(costPerYear, discount) {
  let total = 0;
  for (let index = 0; index < costPerYear.length; index++) {
    const element = costPerYear[index];
    const yearCost = element * 12 * (1 - discount);
    console.log(`age:${37 + index} ,yearCost:${yearCost}, per month: ${yearCost / 12}`);
    total += yearCost;
  }
  console.log('%ccalcInsurace.js line:9 total', 'color: #007acc;', total);
}

const costPerYearMedicine = [
  13.4, 13.4, 13.4, 30.7, 30.7, 30.7, 30.7, 30.7, 30.7, 30.7, 30.7, 30.7, 30.7, 42.91, 42.91, 42.91, 42.91, 42.91,
  55.02, 55.02, 55.02, 55.02, 55.02, 93.07, 93.07, 93.07, 93.07, 93.07, 104.31, 104.31, 104.31, 104.31, 104.31, 104.31,
  104.31, 104.31, 104.31, 104.31, 104.31, 104.31, 104.31, 104.31, 104.31, 104.31,
];

const costPerYearSurgery = [
  16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32,
  16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32, 16.32,
  16.32, 16.32, 16.32, 16.32, 12.21, 12.21, 12.21, 12.21, 12.21, 12.21,
];

let both = [];
for (let index = 0; index < costPerYearMedicine.length; index++) {
  both.push(costPerYearMedicine[index] + costPerYearSurgery[index]);
}

calc(both, 0.4);
