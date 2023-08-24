'use strict';

const bp = BiggerPicture({
  target: document.body,
});

const imageLinks = document.querySelectorAll('#images > a');

for (let link of imageLinks) {
  link.addEventListener('click', openGallery);
}

function openGallery(e) {
  e.preventDefault();
  bp.open({
    items: imageLinks,
    el: e.currentTarget,
  });
}

Macy({
  container: '#images',
  trueOrder: true,
  waitForImages: false,
  margin: 42,
  columns: 3,
  breakAt: {
    1200: 3,
    940: 2,
    400: 1,
  },
});

const addButton = document.getElementById('expand-button');
const gallery = document.getElementById('images');

const imagesList = [
  {
    href: '/src/album/projektycol-1-1.png',
    img: '/src/album/projektycol-1-1.png',
    thumb: '/src/album/projektycol-1-1.png',
    alt: 'Grafika przedstawia realizacje projektu, na ktorej widać ...',
    width: '451',
    height: '601',
  },
  {
    href: '/src/album/projektycol-1-2.png',
    img: '/src/album/projektycol-2-2.png',
    thumb: '/src/album/projektycol-3-2.png',
    alt: 'Grafika przedstawia realizacje projektu, na ktorej widać ...',
    width: '451',
    height: '601',
  },
  /*
W tym przykładzie, po kliknięciu przycisku, wywoływane może być żądanie GET do API (np. z podziałem grafik poprzez paginację) zwracającego dane w formacie JSON, które następnie dodaje kolejne obiekty do imagesList. Następnie generowane są nowe elementy galerii na podstawie tych danych, a galeria jest zaktualizowana za pomocą Macy.js.
  */
];

addButton.addEventListener('click', () => {
  const backgroundElem = document.getElementById('curtain');
  backgroundElem.classList.remove('h-2/3');
  backgroundElem.classList.add('h-[250px]');
  imagesList.forEach((imageData) => {
    const linkElement = document.createElement('a');
    linkElement.href = imageData.href;
    linkElement.setAttribute('data-img', imageData.img);
    linkElement.setAttribute('data-thumb', imageData.thumb);
    linkElement.setAttribute('data-alt', imageData.alt);
    linkElement.setAttribute('data-width', imageData.width);
    linkElement.setAttribute('data-height', imageData.height);

    const figureElement = document.createElement('figure');
    const imgElement = document.createElement('img');
    imgElement.src = imageData.img;
    imgElement.alt = imageData.alt;

    figureElement.appendChild(imgElement);
    linkElement.appendChild(figureElement);
    gallery.appendChild(linkElement);
  });

  const macyInstance = Macy({
    container: '#images',
    trueOrder: false,
    waitForImages: false,
    margin: 16,
    columns: 3,
    breakAt: {
      1200: 3,
      940: 2,
      520: 1,
    },
  });
});
