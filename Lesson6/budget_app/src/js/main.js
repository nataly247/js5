let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    expensesItemBtn = document.getElementsByTagName('expenses-item-btn'), //Утвердить
    optionalExpensesBtn = document.getElementsByTagName('optionalexpenses-btn'), //Утвердить
    countBudgetBtn = document.getElementsByTagName('count-budget-btn'), //Рассчитать

    optionalExpensesItem = document.querySelectorAll('optionalexpenses-item'),
    incomeItem = document.querySelector('choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'), //('#sum') - (?)
    choosePersent = document.querySelector('.choose-percent'), //('#persent')
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    money = parseInt(prompt("Ваш бюджет на месяц?", ""));

    while (isNaN(money) || money == "" || money == null) {
        money = parseInt(prompt("Ваш бюджет на месяц?", ""));
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: 0,
    income: [],
    savings: true,
    chooseExpenses: function () {
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
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = appData.budget / 30;
        alert("Ежедневный бюджет: " + appData.moneyPerDay.toFixed(2));
    },
    detectLevel: function () {
        if (appData.moneyPerDay <= 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = parseInt(prompt("Какова сумма накоплений,")),
                percent = parseInt(prompt("Под какой процент?"));

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депзита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let optional = prompt("Введите необязательную статью расходов в этом месяце", "");

            if ((typeof (optional)) === 'string' && optional != null &&
                optional != '' && optional.length < 50) {
                appData.optionalExpenses[i + 1] = optional;
            }
        }
    },
    chooseIncome: function () {
        let items = "";
        while (typeof (items) !== 'string' || items == null || items == '') {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        };
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function (item, i) {
            alert("Способы доп.заработка: " + (i + 1) + ": " + item);
        });
    }

}