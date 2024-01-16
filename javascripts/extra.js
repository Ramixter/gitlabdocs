let slideIndex = {};

function plusSlides(n, slideshowNo) {
  showSlides(slideIndex[slideshowNo] += n, slideshowNo);
}

function currentSlide(n, slideshowNo) {
  showSlides(slideIndex[slideshowNo] = n, slideshowNo);
}

function showSlides(n, slideshowNo) {
  let slides = document.querySelectorAll(`.slideshow-container[data-slideshow='${slideshowNo}'] .mySlides`);
  slideIndex[slideshowNo] = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;
  slides.forEach((slide, index) => {
    slide.style.display = (index + 1 === slideIndex[slideshowNo]) ? "block" : "none";
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slideshow-container').forEach((container, index) => {
    slideIndex[index + 1] = 1;
    showSlides(1, index + 1);
  });
});
