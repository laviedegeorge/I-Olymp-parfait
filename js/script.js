let counter = 0;
const slides = document.querySelectorAll('.item');
const slidesCounter = document.querySelectorAll('.counter ul li');
const hamBurgerBtn = document.getElementById('h_burger');

/*  SLIDER */
const changeSlides = ()=>{
    slides.forEach((el, i)=> {
        if (i === counter) {
           el.classList.add('active', 'fade');
           slidesCounter[counter].classList.add('active');
        } else {
            el.classList.remove('active', 'fade')
            slidesCounter[counter].classList.remove('active')
        }
    });

    slidesCounter.forEach((el, i)=> {
        if (i === counter) {
           el.classList.add('active');
        } else {
            el.classList.remove('active')
        }
    });

    if (counter === slides.length-1) {
        counter = 0
    }else {
        counter ++;
    }
}

setInterval(() => {
    changeSlides();
}, 6000);



/*  MOBILE HAMBURGER */
hamBurgerBtn.addEventListener('click', ()=>{
    const nav = document.getElementById('nav');
    nav.classList.toggle('show-nav');
})