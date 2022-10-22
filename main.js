const downBTN   = document.querySelector('.down-button'),
      upBTN     = document.querySelector('.up-button'),
      slidebar  = document.querySelector('.sidebar'),
      imgSlides = document.querySelector('.main-slide'),
      slidesCount = imgSlides.children.length;
      
let activeSlide = 0;
// slidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
    imgSlides.style.transform = `translateY(${activeSlide * 100}vh)`;
    slidebar.style.transform = `translateY(-${(slidesCount - (activeSlide + 1)) * 100}vh)`;

upBTN.addEventListener('click', () => {
    changeSlide('up')
    upBTN.classList.remove('reverse')
    downBTN.classList.remove('reverse')
})

downBTN.addEventListener('click', () => {
    changeSlide('down')
    upBTN.classList.add('reverse')
    downBTN.classList.add('reverse')
})

function changeSlide (direction) {
    if (direction === 'up'){
        activeSlide++;
        if (activeSlide === slidesCount){
            activeSlide = 0;
        }
        console.log('up')
    } else if (direction === 'down'){
        activeSlide--;
        if (activeSlide < 0){
            activeSlide = slidesCount - 1;
        }
        console.log('down')
    }
    console.log(activeSlide)
    imgSlides.style.transform = `translateY(-${activeSlide * 100}vh)`;
    slidebar.style.transform = `translateY(-${(slidesCount - (activeSlide + 1)) * 100}vh)`;
}