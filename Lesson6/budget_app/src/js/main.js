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

    expensesBtn = document.getElementsByTagName('button')[0], //Утвердить
    optionalExpensesBtn = document.getElementsByTagName('button')[1], //Утвердить
    countBudgetBtn = document.getElementsByTagName('button')[2], //Рассчитать

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

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let must = expensesItem[i].value,
            howMuch = expensesItem[++i].value;

        if ((typeof (must)) === 'string' && must != null && howMuch != null &&
            must != '' && howMuch != '' && isNaN(howMuch) == false && must.length < 50) {
            appData.expenses[must] = howMuch;
            sum += +howMuch;
        } else {
            alert("Введены некорректные данные");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optional = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = optional;

        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {
    appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay <= 100) {
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay >= 2000) {
        levelValue.textContent = "Высокий уровень достатка";
    } else {
        levelValue.textContent = "Произошла ошибка";
    }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: 0,
    income: [],
    savings: true,
    chooseExpenses: function () {

    },
    detectDayBudget: function () {
        ;
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