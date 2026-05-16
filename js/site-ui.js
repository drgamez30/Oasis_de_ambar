const siteHeader = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");
const backToTop = document.querySelector(".back-to-top");

if(siteHeader && menuToggle){

    menuToggle.addEventListener("click", () => {

        const isOpen = siteHeader.classList.toggle("nav-open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");

    });

    siteHeader.querySelectorAll("nav a").forEach((link) => {

        link.addEventListener("click", () => {

            siteHeader.classList.remove("nav-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");

        });

    });

}

if(backToTop){

    window.addEventListener("scroll", () => {

        backToTop.classList.toggle("show", window.scrollY > 500);

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
