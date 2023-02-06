function calcSalary(salary, bonus, food, driving, isFullExtension) {
  const extension = (isFullExtension ? salary : 15712) * 0.025;
  const salaryForTax = salary + driving + food + bonus + (isFullExtension ? (salary - 15712) * 0.075 * 0.35 : 0);
  const taxPoints = 4.75 * 223;
  const taxSteps = [
    {
      step: 6790,
      tax: 10,
    },
    {
      step: 9730,
      tax: 14,
    },
    {
      step: 15620,
      tax: 20,
    },
    {
      step: 21710,
      tax: 31,
    },
    {
      step: 45180,
      tax: 35,
    },
    {
      step: 58190,
      tax: 47,
    },
  ];

  let remainingSalary = salaryForTax;
  let tax = taxSteps.reduce((acc, cur, index) => {
    if (remainingSalary > 0) {
      const moneyForTax = Math.min(cur.step - (taxSteps[index - 1] ? taxSteps[index - 1].step : 0), remainingSalary);
      const tax = moneyForTax * (cur.tax / 100);
      remainingSalary = remainingSalary - moneyForTax;
      return acc + tax;
    }
    return acc;
  }, 0);

  // const tax =
  // (taxSteps[0].step / 10) * taxSteps[0].tax +
  // (salary >= taxSteps[0].step ? (taxSteps[1].tax / 10) * (taxSteps[1] - taxSteps[0]) : 0) +
  // (salary >= taxSteps[1].step ? taxSteps[2].tax * (taxSteps[2] - taxSteps[1]) : 0) +
  // (salary >= taxSteps[2].step ? taxSteps[3].tax * (taxSteps[3] - taxSteps[2]) : 0) +
  // (salary >= taxSteps[3].step ? taxSteps[4].tax * (taxSteps[4] - taxSteps[3]) : 0) +
  // (salary >= taxSteps[4].step ? taxSteps[5].tax * (taxSteps[5] - taxSteps[4]) : 0) +
  // (salary >= taxSteps[5].step ? taxSteps[4].tax * (taxSteps[4] - taxSteps[3]) : 0) +
  // (salary >= 20260 ? 0.35 * (salaryForTax - 20260) : 0) -
  // taxPoints;
  tax = tax - taxPoints;
  const nationalInsurance = 0.04 * 7122 + 0.07 * (salaryForTax - 7122);
  const healthInsurance = 0.031 * 7122 + 0.05 * (salaryForTax - 7122);
  const employeePension = 0.06 * salary;
  const employerPension = (0.065 + 0.083) * salary;

  const netSalary = salary + bonus + driving - tax - extension - nationalInsurance - healthInsurance - employeePension;
  const totalPension = employeePension + employerPension;
  const totalExtension = (isFullExtension ? salary : 15712) * 0.1;

  console.log('Expenses:', {
    tax,
    extension,
    employeePension,
    nationalInsurance,
    healthInsurance,
    total: tax + extension + employeePension + nationalInsurance + healthInsurance,
  });

  console.log('Income', { netSalary, totalPension, totalExtension });
}

calcSalary(33000, 33000, 1000, 500, false);
