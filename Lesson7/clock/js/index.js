let date = new Date();

function addZero(ourTime) {
    if (ourTime < 2) {
        return '0' + ourTime;
    } else {
        return ourTime;
    }
};

document.getElementById('writeTime').innerHTML = date.getHours() + ':' +
    date.getMinutes() + ':' + date.getSeconds();

let dayNow = date.getDay();

function ruDay(dayNow) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[dayNow];
}
document.getElementById('currentDay').innerHTML = addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) +
    '.' + date.getFullYear() + ' ' + ruDay(dayNow);

// затупила на этом нуле, поправлю в конце недели, уже два дня потеряла
// не хочу зацикливаться вместо того, чтоб следующие уроки проходить