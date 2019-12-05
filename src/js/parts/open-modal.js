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