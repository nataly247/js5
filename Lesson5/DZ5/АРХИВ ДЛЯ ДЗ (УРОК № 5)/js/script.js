let title = document.getElementById('title'),
    menuItem = document.getElementsByClassName('menu-item'),
    //list = document.getElementsByTagName('ul'),
    list = document.querySelector('ul.menu'),
    adv = document.getElementsByClassName('adv'),
    attitude = document.getElementById('prompt');


//восстановить порядок в меню (?)

menuItem[1].innerHTML = 'Второй пункт';
menuItem[2].innerHTML = 'Третий пункт';
//document.list.insertBefore(menuItem[1], menuItem[2]); не работает

//добавить пятый пункт

let newMenuItem = document.createElement('li');
newMenuItem.classList.add('menu-item');
newMenuItem.innerHTML = 'Пятый пункт';

list.appendChild(newMenuItem); //- не работает c getElementsByTagName ( ? )


//поменять заголовок
title.innerHTML = 'Мы продаем только подлинную технику Apple';

//заменить картинку
document.body.style.backgroundImage = "url(img/apple_true.jpg)";

//удалить рекламу со страницы
//column.removeChild('div.adv');  Reference Error (?)

//добавить комментарий
attitude.textContent = prompt('Ваше отношение к технике Apple?');