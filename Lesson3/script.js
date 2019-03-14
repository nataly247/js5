let money, time;

function start() {
    money = parseInt(prompt("Ваш бюджет на месяц?", ""));
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    // function isNaN returns True if its not a number
    while (isNaN(money) || money == "" || money == null) {
        money = parseInt(prompt("Ваш бюджет на месяц?", ""));
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: 0,
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let must = prompt("Введите обязательную статью расходов в этом месяце", ""),
            howMuch = parseInt((prompt("Во сколько обойдется?", "")));

        if ((typeof (must)) === 'string' && must != null && howMuch != null &&
            must != '' && howMuch != '' && isNaN(howMuch) == false && must.length < 50) {
            appData.expenses[must] = howMuch;
        } else {
            alert("Введены некорректные данные");
            i--;
        }

        console.log(must);
        console.log(howMuch);
    }
}

chooseExpenses();

//Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)
function detectDayBudget() {
    appData.moneyPerDay = appData.budget / 30;
    alert("Ежедневный бюджет: " + appData.moneyPerDay.toFixed(2));
}

detectDayBudget();

//Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
function detectLevel() {
    if (appData.moneyPerDay <= 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

//Создать функцию для определения необязательных расходов (chooseOptExpenses):
//Необходимо 3 раза спросить у пользователя “Статья необязательных расходов ?”
//Записать ответы в объект optionalExpenses в формате Номер - Ответ.
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let optional = prompt("Введите необязательную статью расходов в этом месяце", "");

        if ((typeof (optional)) === 'string' && optional != null &&
            optional != '' && optional.length < 50) {
            appData.optionalExpenses[i + 1] = optional;
        } else {
            i--;
        }

        console.log(optional);
    }
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = parseInt(prompt("Какова сумма накоплений,")),
            percent = parseInt(prompt("Под какой процент?"));

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депзита: " + appData.monthIncome);
    }
}