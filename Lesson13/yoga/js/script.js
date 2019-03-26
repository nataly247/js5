//works after DOM stucture donloaded

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


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

            let formData = new FormData(theform);

            function postData(data) {

                return new Promise(function (resolve, reject) {

                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve()
                        } else {
                            reject()
                        }
                    }

                    request.send(data);
                })
            }
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = ' ';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)

        });

    }
    sendForm(form);
    sendForm(contactForm);

    //Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        dots.forEach((item) => item.classList.remove('.dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    // Calculator

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

});


//Валидация данных 
/*

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

*/


