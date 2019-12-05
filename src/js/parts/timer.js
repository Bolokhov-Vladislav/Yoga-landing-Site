function timer(){
    let deadline = '2019-12-6';

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

            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            } else if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else if ((t.days % 10) === 1) {
                days.textContent = t.days + ' день';
            } else if ((t.days % 10) >= 2 && (t.days % 10) <= 4) {
                days.textContent = t.days + ' дня';
            } else {
                days.textContent = t.days + ' дней';
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }

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