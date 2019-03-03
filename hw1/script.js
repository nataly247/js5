let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let must1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let howMuch1 = parseInt((prompt("Во сколько обойдется?", "")));
let must2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let howMuch2 = parseInt((prompt("Во сколько обойдется?", "")));


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: 0,
	income: [],
	savings: false
};

appData.expenses[must1] = howMuch1;
appData.expenses[must2] = howMuch2;

alert("Ваш бюджет на месяц: " + appData.budget);

alert("Обязательные расходы: " + "br" + must1 + ": " +
	appData.expenses.must1 + " и " + must2 + ": " + appData.expenses.must2);

let oneDayBudget = (Number(appData.budget) - howMuch1 - howMuch2 - Number(appData.optionalExpenses)) / 30;
alert("За вычетом этих расходов вы можете тратить: " + oneDayBudget + " в день.").toFixed(2);