const salaries = [
  1_800,
  2_000,
  3_000,
  4_500,
  6_000,
  8_000,
  10_000,
  12_000,
  15_000,
  20_000,
];

const newSalaries = salaries.map(salary => {
  if (salary >= 2000) return parseFloat(salary * 1.10).toFixed(2);
  return parseFloat(salary * 1.15).toFixed(2);
});
console.log(`Salários com reajuste: `, newSalaries);

const filteredSalaries = newSalaries.filter(salary => salary > 2_500);
console.log(`Salários acima de R$ 2.500,00: `, filteredSalaries);

const summedSalaries = filteredSalaries.reduce((sum, salary) => {
  return parseFloat(sum) + parseFloat(salary);
}, 0)
console.log(`Soma dos salários restantes: ${summedSalaries.toFixed(2)}`);
