const slider = document.getElementById('slider');
const sliderContent = document.getElementById('sliderContent');
const images = ['/src/slider/slider-image1.png', '/src/slider/slider-image2.png', '/src/slider/slider-image2.png', '/src/slider/slider-image3.png',];
let currentIndex = 0;
const closeButton = document.getElementById('closeButton')
closeButton.addEventListener('click', handleCloseButton)

function handleCloseButton() {
    console.log('first')
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.add('hidden');
}

function createImageElement(src) {
  const img = document.createElement('img');
  const width = `w-[688px]`;
  const height = `h-[737px]`;
  img.src = src;
  img.alt = 'Obrazek slajdu';
  img.classList.add(width, height, 'object-contain');
  return img;
}


function updateSliderPosition() {
    const offset = -currentIndex * 688;
    // const offset = -currentIndex * 100;
    sliderContent.style.transform = `translateX(${offset}px)`;
    // sliderContent.style.transform = `translateX(${offset}%)`;
}

function changeSlide(index) {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }

    currentIndex = index;
    updateSliderPosition();
}

function nextSlide() {
    changeSlide(currentIndex + 1);
}

function previousSlide() {
    changeSlide(currentIndex - 1);
}

// setInterval(nextSlide, 3000);

// Dodawanie grafik do slidera
images.forEach(imageSrc => {
    const imgElement = createImageElement(imageSrc);
    sliderContent.appendChild(imgElement);
});

// Przypisanie zdarzeń do przycisków nawigacyjnych (opcjonalnie)
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', previousSlide);
