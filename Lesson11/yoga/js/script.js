//works after DOM stucture donloaded

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // tab parent - class "info-header"
    // tab class "info-header-tab"
    // every tab content class "info-tabcontent"

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    //to hide other tabs content after user click on one of them
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            console.log(tabContent);
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // Timer

    let deadline = '2019-04-01';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60));
        //  hours = Math.floor((t / 1000 / 60 / 60) % 24);
        //  days = Math.floor(t / (1000 * 60 * 60 * 24));

        //console.log(typeof (seconds));  - Number!
        //console.log(typeof (minutes));  - Number!

        function addZero(num) {
            num = num.toString();
            //(num < 10) ? (0 + num) : return num;  /* how to refactor correct? */
            if (num < 10) {
                return 0 + num;
            } else {
                return num;
            }

        }


        minutes = addZero(minutes);
        seconds = addZero(seconds);

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Forms

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        contactForm = document.querySelector('.contact-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function sendForm(theform) {
        theform.addEventListener('submit', function (event) {
            event.preventDefault();
            theform.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(theform);

            /*
            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });
    
            let json = JSON.stringify(obj);
    
            request.send(json);
            */
            request.send(formData);

            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                    //add loading animation
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success; //+ validPhone(); -?
                    //may add ThankYou modal here
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            }


            for (let i = 0; i < input.length; i++) {
                input[i].value = ' ';
            }
        });

    }
    sendForm(form);
    sendForm(contactForm);

});




//Валидация данных 

function validPhone() {

    let re = /^\+|\d[\d\(\)\ -]{4,14}\d$/;

    let userPhone = document.getElementById('tel').value;
    let valid = re.test(userPhone);


    if (valid == true) {
        statusMessage.innerHTML = message.success;
    } else {
        let output = "Номер телефона введен неправильно!";
        document.getElementsByClassName('.contact-form-title').innerTHML =
            document.getElementsByClassName('contact-form-title').innerHTML + '<br>' + output;
    }
}


