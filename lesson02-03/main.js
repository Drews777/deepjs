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
// console.log(addExpenses.length);
// console.log('Период равен' + period + 'месяцев');
// console.log('Цель заработать' + mission + 'рублей');

let addExpensesSplit = addExpenses.toLowerCase().split(', ');
console.log(addExpensesSplit);

money = +prompt('Ваш месячный доход?', '60000');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартира, кредит');
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?', 'Квартира');
let amount1 = +prompt('Во сколько это обойдется?', '15000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'Кредит');
let amount2 = +prompt('Во сколько это обойдется?', '20000');

// let budgetMounth = money - (amount1 + amount2);

function getExpensesMonth(a, b){

    let c = a + b;
    return c;
}
let d = getExpensesMonth(amount1, amount2);
console.log(d);
function getAccumulatedMonth(c, d){
    return c - d;
}
console.log(getAccumulatedMonth(money, d));
let accumulatedMonth = getAccumulatedMonth(money, d);
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log(budgetDay);
if (budgetDay >= 1200) console.log('У вас высокий уровень дохода');
if (budgetDay < 1200 && budgetDay > 600) console.log('У вас средний уровень дохода');
if (budgetDay <= 600 && budgetDay > 0) console.log('К сожалению у вас уровень дохода ниже среднего');
if (budgetDay < 0) console.log('Что то пошло не так');

function getTargetMonth(t, m){
    return t / m;
}
let targetMounth = getTargetMonth(mission, accumulatedMonth);
console.log(targetMounth);