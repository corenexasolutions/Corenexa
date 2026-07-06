/* ==========================================================
   CORENEXA V2
   script.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================
       HEADER STICKY
    ========================================================== */

    const header = document.querySelector(".header-modern");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* ==========================================================
       MENU MOBILE
    ========================================================== */

    const toggle = document.querySelector(".mobile-toggle");
    const menu = document.querySelector(".nav-menu");

    if (toggle && menu) {

        toggle.addEventListener("click", () => {

            menu.classList.toggle("mobile-open");

        });

        menu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("mobile-open");

            });

        });

    }

    /* ==========================================================
       SCROLL SUAVE
    ========================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

    /* ==========================================================
       SCROLL TO TOP
    ========================================================== */

    const scrollBtn = document.querySelector(".scroll-top");

    if (scrollBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                scrollBtn.classList.add("show");

            } else {

                scrollBtn.classList.remove("show");

            }

        });

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================================================
       FADE-UP
    ========================================================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll(".fade-up").forEach(el => {

        observer.observe(el);

    });

    /* ==========================================================
       CONTADORES
    ========================================================== */

    function animateCounter(counter) {

        const target = Number(counter.dataset.target);

        if (!target) return;

        let current = 0;

        const speed = target / 100;

        function update() {

            current += speed;

            if (current >= target) {

                counter.innerText = target.toLocaleString();

                return;

            }

            counter.innerText = Math.floor(current).toLocaleString();

            requestAnimationFrame(update);

        }

        update();

    }

    document.querySelectorAll("[data-target]").forEach(counter => {

        const counterObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(counter);

                    counterObserver.disconnect();

                }

            });

        });

        counterObserver.observe(counter);

    });

    /* ==========================================================
       PARALLAX HERO
    ========================================================== */

    const heroVisual = document.querySelector(".hero-visual");

    window.addEventListener("mousemove", (e) => {

        if (!heroVisual) return;

        const x = (window.innerWidth / 2 - e.clientX) / 60;
        const y = (window.innerHeight / 2 - e.clientY) / 60;

        heroVisual.style.transform = `translate(${x}px, ${y}px)`;

    });

    /* ==========================================================
       HOVER 3D
    ========================================================== */

    const cards = document.querySelectorAll(

        ".problem-card, .service-card, .benefit-card, .workflow-card, .why-card"

    );

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - .5) * 10;
            const rotateX = ((y / rect.height) - .5) * -10;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /* ==========================================================
       BOTÕES
    ========================================================== */

    document.querySelectorAll("button,a.btn-primary-lg,a.btn-secondary-lg")
        .forEach(btn => {

            btn.addEventListener("mouseenter", () => {

                btn.style.transition = ".3s";

            });

        });

});