const calc = require('./calculation');

const ratePerHour = 300;
const hoursPerDay = 4;
const daysPerWeek = 6;

// GROSS INCOME
const dailyHours = calc.multiply(hoursPerDay, daysPerWeek);
const grossIncome = calc.multiply(ratePerHour, dailyHours);

// DEDUCTIONS
const tax = calc.multiply(grossIncome, 0.10);
const sss = 1200;
const pagIbig = 300;
const philHealth = 400;

// TOTAL DEDUCTIONS
const totalDeductions = calc.add(
  calc.add(
    calc.add(tax, sss),
    pagIbig
  ),
  philHealth
);

const netSalary = calc.subtract(grossIncome, totalDeductions); // NET SALARY

console.log("Gross Income:", grossIncome);
console.log("Tax:", tax);
console.log("SSS:", sss);
console.log("Pag-Ibig Fund:", pagIbig);
console.log("PhilHealth:", philHealth);
console.log("Total Deductions:", totalDeductions);
console.log("Net Salary:", netSalary);