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