document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SMOOTH NAVIGATION
    ========================= */

    const navLinks = document.querySelectorAll(
        '.navbar nav a, .logo, .hero-buttons a'
    );

    navLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                !targetId.startsWith("#")
            ) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5, 4, 4, 0.94)";

            navbar.style.borderBottomColor =
                "rgba(150, 20, 30, 0.38)";

        } else {

            navbar.style.background =
                "rgba(8, 7, 7, 0.82)";

            navbar.style.borderBottomColor =
                "rgba(150, 20, 30, 0.22)";
        }

    });


    /* =========================
       REVEAL ANIMATION
    ========================= */

    const revealElements = document.querySelectorAll(
        ".section-label, .section h2, .section-text, .member-card, .match-box, .training-card"
    );

    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    });


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {
        observer.observe(element);
    });


    /* =========================
       HERO PARALLAX
    ========================= */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if (!hero) {
            return;
        }

        const scrollY = window.scrollY;

        if (scrollY < window.innerHeight) {

            hero.style.backgroundPosition =
                `center ${scrollY * 0.25}px`;

        }

    });


    /* =========================
       TRAINING MAP BUTTONS
    ========================= */

    const mapButtons = document.querySelectorAll(".map-btn");

    mapButtons.forEach(button => {

        button.addEventListener("click", () => {

            const mapName = button.dataset.map;

            console.log(
                `Training map selected: ${mapName}`
            );

            /*
                CS2 Workshop launch
                will be connected here later.
            */

        });

    });


    /* =========================
       CURRENT YEAR
    ========================= */

    const footerText = document.querySelector("footer p");

    if (footerText) {

        const currentYear =
            new Date().getFullYear();

        footerText.textContent =
            `© ${currentYear} SEXY CLAN. ALL RIGHTS RESERVED.`;

    }

});