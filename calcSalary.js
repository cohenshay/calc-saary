function calcSalary(salary, food, driving, isFullExtension) {
  const extension = (isFullExtension ? salary : 15712) * 0.025;
  const salaryForTax = salary + driving + food + (isFullExtension ? ((salary - 15712) * 0.075 * 0.35) : 0);
  const taxPoints = 3.25 * 219;
  const tax = (0.10 * 6330) +
    (salary >= 6330 ? (0.14 * (9080 - 6330)) : 0) +
    (salary >= 9080 ? (0.20 * (14580 - 9080)) : 0) +
    (salary >= 14580 ? (0.31 * (20260 - 14580)) : 0) +
    (salary >= 20260 ? (0.35 * (salaryForTax - 20260)) : 0) - taxPoints;

  const nationalInsurance = (0.04 * 6331) + (0.07 * (salaryForTax - 6331));
  const healthInsurance = (0.031 * 6331) + (0.05 * (salaryForTax - 6331));
  const employeePension = 0.06 * salary;
  const employerPension = (0.065 + 0.083) * salary;

  const netSalary = salary + driving - tax - extension - nationalInsurance - healthInsurance - employeePension;
  const totalPension = employeePension + employerPension;
  const totalExtension = (isFullExtension ? salary : 15712) * 0.1;

  console.log('Expenses:',{
    tax,
    extension,
    employeePension,
    nationalInsurance,
    healthInsurance,
    total: tax + extension + employeePension + nationalInsurance + healthInsurance
  });

  console.log('Income',{ netSalary, totalPension, totalExtension });
}

calcSalary(29000,800,500,false)
