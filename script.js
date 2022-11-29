const slides = document.querySelectorAll('.slide')


for(const slide of slides) {  
  slide.addEventListener('click', () => {
    cleareActiveslide()
    slide.classList.add('active')
  })
}


function cleareActiveslide () {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}