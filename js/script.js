let counter = 0;
const slides = document.querySelectorAll('.item');
const slidesCounter = document.querySelectorAll('.counter');

const changeSlides = ()=>{
    slides.forEach((el, i)=> {
        if (i === counter) {
           el.classList.add('active', 'fade');
        } else {
            el.classList.remove('active', 'fade')
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
