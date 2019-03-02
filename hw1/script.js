let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let must1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let howMuch1 = parseInt((prompt("Во сколько обойдется?", "")));
let must2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let howMuch2 = parseInt((prompt("Во сколько обойдется?", "")));

/*я не понимаю, как свoйствам обекта присваиваить значения переменных */

let appData = {
	budget: money,
	timeData: time,
	/*Записать ответы в объект expenses в формате: 
    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }  ???  */
	//expenses: {},
	//expenses[must1, must2] = howMuch1, howMuch2,  ???
	/* не понимаю как пока */
	expenses: {
		/* и в каком месте видео показано как cвойству обьекта, 
		который находится внутри другого обьекта, 
		надо присваивать значение переменной? */
		must1: howMuch1,
		must2: howMuch2
	},
	optionalExpenses: 0,
	income: [],
	savings: false
};

alert("Ваш бюджет на месяц: " + appData.budget);

alert("Обязательные расходы: " + "br" + must1 + ": "
	+ appData.expenses["must1"] + " и " + must2 + ": " + appData.expenses["must2"]);

let oneDayBudget = (Number(appData.budget) - howMuch1 - howMuch2 - Number(appData.optionalExpenses)) / 30;
alert("За вычетом этих расходов вы можете тратить: " + oneDayBudget + " в день.").toFixed(2);