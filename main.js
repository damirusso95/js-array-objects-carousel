// const images = [
//     {
//         image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];

const images = [
    { src: 'img/01.webp' , alt: 'Immagine 1' },
    { src: 'img/02.webp', alt: 'Immagine 2' },
    { src: 'img/03.webp', alt: 'Immagine 3' }
  ];

const carousel = document.getElementById('carousel');
  const slidesContainer = document.getElementById('slides');
  let currentSlide = 0;

  // Aggiungi le immagini all'HTML
  images.forEach(image => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    li.appendChild(img);
    slidesContainer.appendChild(li);
  });

  function showSlide(index) {
    const totalSlides = images.length;
    if (index >= 0 && index < totalSlides) {
      const offset = -index * 300; // Larghezza di ogni immagine
      slidesContainer.style.transform = `translateX(${offset}px)`;
      currentSlide = index;
    }
  }

  // Automaticamente passa alla prossima immagine ogni 3 secondi
  setInterval(() => {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
  }, 3000);