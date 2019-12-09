function timer(){
    let deadline = '2019-12-12';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());

        let seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60) % 24),
            days = Math.floor((t/(1000*60*60*24)));
            return {
                'total' : t,
                'days' : days,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock (id, endtime ) {
        
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            
            ((t.days % 10) >= 2 && (t.days % 10) <= 4) ? days.textContent = t.days + ' дня' : 
            ((t.days % 10) === 1) ? days.textContent = t.days + ' день' : days.textContent = t.days + ' дней';
            (t.seconds < 10 ) ? seconds.textContent = '0' + t.seconds : seconds.textContent = t.seconds;
            (t.minutes < 10 ) ? minutes.textContent = '0' + t.minutes : minutes.textContent = t.minutes;
            (t.hours < 10) ? hours.textContent = '0' + t.hours : hours.textContent = t.hours;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '0';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);
}

module.exports = timer;