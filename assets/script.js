const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments du DOM
const banner = document.getElementById('banner');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = banner.querySelector('.banner-img');
const tagLine = banner.querySelector('p span');
const bannerImages = slides.map(slide => `./assets/images/slideshow/${slide.image}`); // Utilisation de toutes les images du tableau slides

// Index de l'image actuellement affichée
let currentImageIndex = 0;

// Fonction pour changer l'image du carrousel et le texte
function changeImage(index) {
    bannerImg.src = bannerImages[index];
    tagLine.innerHTML = slides[index].tagLine;
}

// Event listener pour la flèche gauche
arrowLeft.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex === 0) ? bannerImages.length - 1 : currentImageIndex - 1;
    changeImage(currentImageIndex);
    updateDots(currentImageIndex);
    console.log('Flèche gauche cliquée');
});

// Event listener pour la flèche droite
arrowRight.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex === bannerImages.length - 1) ? 0 : currentImageIndex + 1;
    changeImage(currentImageIndex);
    updateDots(currentImageIndex);
    console.log('Flèche droite cliquée');
});

// Sélection de l'élément .dots
const dotsContainer = document.querySelector('.dots');

// Supprimer les bullet points existants
dotsContainer.innerHTML = '';

// Création et ajout des bullet points
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
});

// Mettre à jour les bullet points
updateDots(0);

// Fonction pour mettre à jour les bullet points
function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}
