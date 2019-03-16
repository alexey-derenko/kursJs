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
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    
    // Timer

    let deadline = '2018-03-15';

    let checkTime = (i) => {
        if ( i < 10) {
            i="0" + i;
        }
    return i;
    }


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
    }

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000),
            updateClock = () => {
            let t = getTimeRemaining(endtime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
        
                if (t.total <= 0) {
                    clearInterval(timeInterval);                
                }           
            };
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

    descriptionBtn.forEach( (item) => {        
        item.addEventListener('click', () => {            
            overlay.style.display = 'block';
            item.classList.add('more-splash');
            document.body.style.overflow = 'hidden';                  
        });
    });     
});


// elem.addEventListener('click', () =>{} , 
//а не  elem.addEventListener('click', function(){ let func = () => {} 