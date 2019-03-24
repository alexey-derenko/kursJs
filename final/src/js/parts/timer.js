function timer() {
    let deadline = '2018-03-15';

    function checkTime(i) {
        if ( i < 10) {
            i="0" + i;
        }
    return i;
    }

    function getTimeRemaining(endtime) {
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

            if (t.total <= 0) {
                clearInterval(timeInterval);
                
            }
            

        }    
    }
    setClock('timer', deadline);
}

export default timer;