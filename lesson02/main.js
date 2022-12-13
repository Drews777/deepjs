let money = 300000;
let income = '200000';
let addExpenses = 'internet, taxi, kommunalka';
let deposit = true;
let mission = 999999999;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен' + period + 'месяцев');
console.log('Цель заработать' + mission + 'рублей');

let addExpensesSplit = addExpenses.toLowerCase().split(', ');
console.log(addExpensesSplit);

let budgetDay = money / 30;
console.log(budgetDay);