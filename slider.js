const slider = document.getElementById('slider');
const slides = slider.querySelectorAll('.flex-none');
const slideWidth = slides[0].clientWidth;

let currentIndex = 0;

function moveToSlide(index) {
  const newPosition = -index * slideWidth;
  slider.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

// setInterval(() => {
//   currentIndex = (currentIndex + 1) % slides.length;
//   moveToSlide(currentIndex);
// }, 3000);
