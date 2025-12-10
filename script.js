/* Arquivo: script.js */

// --- LÓGICA DO CARROSSEL (SLIDESHOW) ---
const slides = document.querySelectorAll('.hero-img .slide');

// A "proteção": Só roda o código do carrossel se houver slides na página
if (slides.length > 0) {
    let currentSlide = 0;
    const slideInterval = 4000;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, slideInterval);
}


// --- LÓGICA DO MENU MOBILE ---
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

// A proteção: Só tenta adicionar o clique se o botão existir
if (mobileMenuIcon && navLinks) {
    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}