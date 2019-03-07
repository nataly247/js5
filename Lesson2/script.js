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


for (let i = 0; i < 2; i++) {
    let must = prompt("Введите обязательную статью расходов в этом месяце", ""),
        howMuch = parseInt((prompt("Во сколько обойдется?", "")));

    /* если пользователь нажимает отмена - тип данных null,
    !!! В JS null - это элемент, которого не существует, как например, когда в промпте жмешь отмену, 
    он просто не создается и ПЕРЕМЕННАЯ равна null, поэтому и сравнивать его надо a != null, без typeof)
    если ничего не внес - пустая строка ''; a.length - длина;

    + по ходу, у меня надо еще делать проверку на howMuch != NaN
    и jshint ругается, что надо упользовать isNaN function,
    но я пока не знаю как ;(
    
    делаем проверки: */


    if ((typeof (must)) === 'string' && must != null && howMuch != null &&
        must != '' && howMuch != '' && howMuch != NaN && must.length < 50) {
        appData.expenses[must] = howMuch;
    } else {
        alert("Введены некорректные данные");
        i--;
    }

    console.log(must);
    console.log(howMuch);
}

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