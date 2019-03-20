window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }       
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };
    
    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            tab.forEach((item,i) => {
                if (target == item) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            });           
        }
    });

  

    

    
    // Timer

    let deadline = '2019-03-18';

    let checkTime = (i) => {
        if ( i < 10) {
            i="0" + i;
        }
    return i;
    };


        let getTimeRemaining = (endtime) => {        
        let t = Date.parse(endtime) - Date.parse(new Date()),        
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours = Math.floor((t/(1000*60*60)));

      

        if (seconds < 10) {
            seconds = '0'+ seconds;
        }

        if (minutes < 10) {
            minutes = '0'+ minutes;
        }

        if (hours < 10 ) {
            hours = '0'+ hours;
        }

        if (Date.parse(endtime) <= Date.parse(new Date())) {
            seconds = '00';
            minutes = '00';
            hours = '00';

        }
        

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),            
            updateClock = () => {
            let t = getTimeRemaining(endtime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
        
                if (t.total <= 0) {
                    clearInterval(timeInterval);                
                }           
            },
            timeInterval = setInterval(updateClock, 1000);
        };    
    setClock('timer', deadline);
   
    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', () => {        
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; 
        //запрещаем прокрутку фона при открытом модальном окне      
    });

    close.addEventListener('click', () => {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';    
    });
    
    let descriptionBtn = document.querySelectorAll('.description-btn'); 
    //используем селекторолл так как в проекте много классов .description-btn 
    //и работаем с массивом кнопок

    descriptionBtn.forEach( (item) => {        //Тут трабл спросить у наставника
        item.addEventListener('click', () => {            
            overlay.style.display = 'block';
            item.classList.add('more-splash');
            document.body.style.overflow = 'hidden';                  
        });
    });
    
    //Form

    let message = {
        loading: 'Загрузка ...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошо не так',
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input')[0],       
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');       
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);     
        
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        
        request.send(json);
        //console.log(input[0]);

       
            
			// input.value = input.value.replace(/[^(\+?\d)\+]/g, '');
     
        
        // input.addEventListener('input', function() {
        //     console.log('input');
		// 	//input.value = input.value.replace(/[^\d\+]/g, '');//works
		// 	if (input.value != '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$') {
        //         statusMessage.innerHTML = "Введите номер телефона с знаком +";
        //         button[0].disabled = true;
        //     } else {
        //         statusMessage.innerHTML = "Спасибо за правильный ввод телефона"
        //         button[0].disabled = false;
        //     }
            
		// 	// input.value = input.value.replace(/[^(\+?\d)\+]/g, '');
        // });       
        

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4 )  {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;             
            } else {
                statusMessage.innerHTML = message.failure;                
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        } 
    
        // input.addEventListener('input', function() {
        //     console.log('input');
		// 	//input.value = input.value.replace(/[^\d\+]/g, '');//works
		// 	if (input.value != '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$') {
        //         statusMessage.innerHTML = "Введите номер телефона с знаком +";
        //         button[0].disabled = true;
        //     } else {
        //         statusMessage.innerHTML = "Спасибо за правильный ввод телефона"
        //         button[0].disabled = false;
        //     }
        // });
        


        
    // });

    //ContactForm
    let message = {
        loading: 'Загрузка ...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошо не так',
    };

    let formContact = document.getElementById('form'),
        inputContact = formContact.getElementsByTagName('input')[1],
        statusMessageContact = document.createElement('div');

    statusMessageContact.classList.add('status');
    console.log(document.querySelector('form#form'));
    
    formContact.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(document.getElementsByClassName('contact-form'));
        formContact.appendChild(statusMessageContact);
        
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //request.setRequestHeader('Content-Type', 'application/x-www-urlencoded');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(formContact); 
        request.send(formData);
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessageContact.innerHTML = massage.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessageContact.innerHTML = massage.success;
            } else {
                statusMessageContact.innerHTML = massage.failure;
            }
        });
        for (let i = 0; i < inputContact.length; i++) {            
            inputContact[i].value = '';            
        } 
    });



    // слайдер

  //  let slideIndex = 1,



    
    });
});
