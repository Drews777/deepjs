'use strict';

let money = 300000;
let income = '200000';
let addExpenses = 'internet, taxi, kommunalka';
let deposit = true;
let mission = 100000;
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

money = +prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

let budgetMounth = money - (amount1 + amount2);
console.log(budgetMounth);
console.log(Math.ceil(mission / budgetMounth));
budgetDay = Math.floor(budgetMounth / 30);

if (budgetDay >= 1200) console.log('У вас высокий уровень дохода');
if (budgetDay < 1200 && budgetDay > 600) console.log('У вас средний уровень дохода');
if (budgetDay <= 600 && budgetDay > 0) console.log('К сожалению у вас уровень дохода ниже среднего');
if (budgetDay < 0) console.log('Что то пошло не так');