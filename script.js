 // script.js

 const burger = document.querySelector('.burger');
 const nav = document.querySelector('.nav-links');
 const navLinks = document.querySelectorAll('.nav-links li');
 
 burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');
     burger.classList.toggle('toggle');
 });
 
 // Smooth scrolling for nav links (optional)
 navLinks.forEach(link => {
     link.addEventListener('click', () => {
         nav.classList.remove('nav-active');
         burger.classList.remove('toggle');
     });
 });
/*

let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

// Clone the first slide and append it to the end of the slidesContainer
const firstSlideClone = slides[0].cloneNode(true);
slidesContainer.appendChild(firstSlideClone);

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);

    // Reset to the first slide (for a continuous loop effect)
    if (slideIndex === totalSlides) {
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            slideIndex = 0;
            showSlide(slideIndex);
            setTimeout(() => {
                slidesContainer.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }, 500);
    }
}

// Automatically advance slides every 5 seconds
setInterval(nextSlide, 4000);

// Initial call to display the first slide
showSlide(slideIndex); */

// First Slider (Single Image)
let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

// Clone the first slide and append it to the end of the slidesContainer
const firstSlideClone = slides[0].cloneNode(true);
slidesContainer.appendChild(firstSlideClone);

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);

    // Reset to the first slide (for a continuous loop effect)
    if (slideIndex === totalSlides) {
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            slideIndex = 0;
            showSlide(slideIndex);
            setTimeout(() => {
                slidesContainer.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }, 500);
    }
}

// Automatically advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Initial call to display the first slide
showSlide(slideIndex);


// Second Slider (Multiple Images)
let multiSlideIndex = 0;
const multiSlidesContainer = document.querySelector('.multi-slides');
const multiSlides = document.querySelectorAll('.multi-slides img');
const multiTotalSlides = multiSlides.length;

// Clone the first few slides and append them to the end of the multiSlidesContainer
for (let i = 0; i < 5; i++) {  // Adjust based on number of visible slides
    const clone = multiSlides[i].cloneNode(true);
    multiSlidesContainer.appendChild(clone);
}

function showMultiSlide(index) {
    const multiSlideWidth = multiSlides[0].clientWidth;
    multiSlidesContainer.style.transform = `translateX(${-index * multiSlideWidth}px)`;
}

function nextMultiSlide() {
    multiSlideIndex++;
    showMultiSlide(multiSlideIndex);

    // Reset to the first slide (for a continuous loop effect)
    if (multiSlideIndex === multiTotalSlides) {
        setTimeout(() => {
            multiSlidesContainer.style.transition = 'none';
            multiSlideIndex = 0;
            showMultiSlide(multiSlideIndex);
            setTimeout(() => {
                multiSlidesContainer.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }, 500);
    }
}

// Automatically advance slides every 5 seconds
setInterval(nextMultiSlide, 5000);

// Initial call to display the first slide
showMultiSlide(multiSlideIndex);
