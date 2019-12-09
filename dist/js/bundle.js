/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;
    
    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(restDays.value == '' ||  persons.value == ''){
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    }); 

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(restDays.value == '' ||  persons.value == ''){
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    }); 

    place.addEventListener('change', function(){
        if(restDays.value == '' ||  persons.value == ''){
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total * this.options[this.selectedIndex].value;
        }
    });
}
module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form-modal.js":
/*!************************************!*\
  !*** ./src/js/parts/form-modal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function formModal() {
     let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form');
    let input = document.getElementsByTagName('input');
    let statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //для json формата

        let formData = new FormData(form);

        // let objJson = {}; //для json формата
        // formData.forEach(function(value, key){
        //     objJson[key] = value;
        // });
        // let json = JSON.stringify(objJson);
        // request.send(json);

        request.send(formData);

        request.addEventListener('readystatechange', function(){
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
}
module.exports = formModal;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form');
    let input = document.getElementsByTagName('input');
    let statusMessage = document.createElement('div');

     let formCont = document.querySelector('#form');
     formCont.addEventListener('submit', function(e){
         e.preventDefault();
         formCont.appendChild(statusMessage);
 
         let formData = new FormData(formCont);
         let objJson = {}; 
         formData.forEach(function(value, key){
             objJson[key] = value;
         });
         let json = JSON.stringify(objJson);
 
         function postData(data) {
             return new Promise(function(resolve, reject) {
                 let request = new XMLHttpRequest();
                 request.open('POST', 'server.php');
                 request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
 
                 request.addEventListener('readystatechange', function(){
                     if(request.readyState < 4) {
                         resolve();
                     } else if(request.readyState === 4 && request.status == 200) {
                         resolve();
                     } else {
                         reject();
                     }
                 });
                 
                 request.send(json);
             });
         }// end postData
         
         function clearInput() {
             for(let i = 0; i < input.length; i++) {
                 input[i].value = '';
             }
         }
         postData(json)
                     .then(() => statusMessage.innerHTML = message.loading)
                     .then(() => statusMessage.innerHTML = message.success)
                     .catch(() => statusMessage.innerHTML = message.failure)
                     .then(clearInput);
     });
}
module.exports = form;

/***/ }),

/***/ "./src/js/parts/open-modal.js":
/*!************************************!*\
  !*** ./src/js/parts/open-modal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function openModal() {
     let more = document.querySelector('.more'),
     overlay = document.querySelector('.overlay'),
     close = document.querySelector('.popup-close'),
     about = document.querySelector('#about');
     
    about.addEventListener('click', (e) => {
        if (e.target.className == 'more' || e.target.className == 'description-btn'){
            overlay.style.display = 'block';
            about.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
}
module.exports = openModal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {

     let slideIndex = 1,
     slides = document.querySelectorAll('.slider-item'),
     prev = document.querySelector('.prev'),
     next = document.querySelector('.next'),
     dotsWrap = document.querySelector('.slider-dots'),
     dots = document.querySelectorAll('.dot');
 
    function showSlides(n) {

        if(n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    next.addEventListener('click', function() {
        plusSlides(1);//1 шаг вперед 
    });
    prev.addEventListener('click', function() {
        plusSlides(-1);//1 шаг назад по слайдеру 
    });

    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    dotsWrap.addEventListener('click', function(e) {
        for (let i = 0; i <= dots.length; i++){
            if(e.target.classList.contains('dot') && e.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });

}
module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

 function tabs(){
    let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');
   
   function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
   }
   hideTabContent(1);
   
   
   function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')){
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
   }
   
   info.addEventListener('click', (e) => {
    let target = e.target;
   
    if (target && target.classList.contains('info-header-tab')){
        for (let i = 0; i < tab.length; i++) {
            if(target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
   });
 }
module.exports = tabs;


/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        calc = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
        openModal = __webpack_require__(/*! ./parts/open-modal */ "./src/js/parts/open-modal.js"),
        formModal = __webpack_require__(/*! ./parts/form-modal */ "./src/js/parts/form-modal.js");

        tabs();
        calc();
        form();
        timer();
        slider();
        openModal();
        formModal();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map