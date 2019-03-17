let date = new Date();

function addZero(ourTime) {
    if (ourTime >= 0 && ourTime < 10) {
        return '0' + ourTime;
    } else {
        return ourTime;
    }
}

document.getElementById('writeTime').innerHTML = date.getHours() + ':' +
    date.getMinutes() + ':' + date.getSeconds() + ' ' +
    addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) +
    '.' + date.getFullYear();

let dayNow = date.getDay();

function ruDay(dayNow) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[dayNow];
}

document.getElementById('currentDay').innerHTML = ruDay(dayNow);

// ! TO-DO 
// дописать функцию, считающую разницу между датами в днях !
// и создать интерфейс с тремя input-ами