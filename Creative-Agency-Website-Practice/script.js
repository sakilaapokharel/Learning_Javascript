var prevScrollpos = window.scrollY || window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.scrollY || window.pageYOffset;
  var navbarElements = document.getElementsByClassName("navbar");

  if (navbarElements.length > 0) {
    if (prevScrollpos > currentScrollPos) {
      navbarElements[0].style.top = "0";
    } else {
      navbarElements[0].style.top = "-100px";
    }
  }

  prevScrollpos = currentScrollPos;
};


// Carousel Function

// script.js
const carousel = document.querySelector('#project-carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const cards = document.querySelectorAll('#project-card');
const visibleCards = 2.5;
let currentSlide = 0;

function updateCarousel() {
  cards.forEach((card, index) => {
    if (index >= currentSlide && index < currentSlide + visibleCards ) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

prevButton.addEventListener('click', () => {
  currentSlide = Math.max(0, currentSlide - 1);

  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentSlide = Math.min(cards.length - visibleCards, currentSlide + 1);
  updateCarousel();
});

updateCarousel();
