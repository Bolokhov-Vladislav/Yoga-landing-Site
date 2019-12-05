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