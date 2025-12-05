// ======================= SCRIPTS UNIFICADOS E CORRIGIDOS =======================

// --- 1. CONFIGURAÇÃO DE VARIÁVEIS DO MENU/HEADER ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


// --- 2. SWIPER INITIALIZATION (Portfólio) ---

// Removi a inicialização antiga e incorreta do ".mySwiper" e usei apenas a do ".portfolio-container"

var swiper = new Swiper(".portfolio-container", {
    slidesPerView: 1, // Mostra 1 slide por vez no mobile
    spaceBetween: 30, // Espaço entre os slides

    // Adiciona o responsivo
    breakpoints: {
        600: { // A partir de 600px
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: { // A partir de 992px
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

    // Adiciona a paginação (bolinhas)
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Adiciona os botões de navegação (setas)
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Loop para navegação contínua
    loop: true,
    autoplay: {
        delay: 5000, // Troca a cada 5 segundos
        disableOnInteraction: false,
    },
});


// --- 3. SCROLL REVEAL INITIALIZATION ---
// Certifique-se de que a biblioteca ScrollReveal está linkada no HTML antes deste arquivo.
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    // Revelar elementos ao carregar e rolar
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    // Adicionei o .portfolio-container para o Scroll Reveal
    ScrollReveal().reveal('.tech-stack-container, .portfolio-container, .contact form', { origin: 'bottom' }); 
    ScrollReveal().reveal('.home-content h1, .home-content .social-media', { origin: 'left' });
}


// --- 4. MENU ICON TOGGLE ---
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// --- 5. STICKY HEADER & SEÇÃO ATIVA & FECHAMENTO DO MENU AO ROLAR ---
// A função window.onscroll foi unificada para evitar conflitos.
window.onscroll = () => {
    // A. Sticky Header
    header.classList.toggle('sticky', window.scrollY > 100);

    // B. Link Ativo na Navegação
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Margem para ativar o link antes de chegar no topo
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Encontra e ativa o link correspondente
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // C. Fechamento do Menu Lateral
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};