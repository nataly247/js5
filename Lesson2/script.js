let money = parseInt(prompt("Ваш бюджет на месяц?", "")),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: 0,
    income: [],
    savings: false
};

//let i = 0;
//while (i < 2) {
//    let must = prompt("Введите обязательную статью расходов в этом месяце", ""),
//        howMuch = parseInt((prompt("Во сколько обойдется?", "")));
//    i++;
//}

//let i = 0;
//do {
//    let must = prompt("Введите обязательную статью расходов в этом месяце", ""),
//        howMuch = parseInt((prompt("Во сколько обойдется?", "")));
//    i++;
//}
//while (i < 2);

let y = 0;
do {
    for (let i = 0; i < 2; i++) {
        let must = prompt("Введите обязательную статью расходов в этом месяце", ""),
            howMuch = parseInt((prompt("Во сколько обойдется?", "")));

        /* если пользователь нажимает отмена - тип данных null,
        если ничего не внес - пустая строка ''; a.length - длина;
        делаем проверки: */
        if ((typeof (must)) === 'string' && (typeof (must)) != null && (typeof (howMuch)) != null &&
            must != '' && howMuch != '' && must.length < 50) {
            appData.expenses[must] = howMuch;
        } else {
            alert("Введены некорректные данные");
            continue;
        }
        console.log(must);
        console.log(howMuch);
        /* не могу понять, почему три раза по циклу идет */
    };
    y++;

}
while (y < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay.toFixed(2));
//alert(typeof(m));

if (appData.moneyPerDay <= 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};