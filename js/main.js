/* =========================================
PRELOADER PREMIUM
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hidden");

        setTimeout(() => {

            loader.style.display = "none";

        }, 900);

    }, 1800);

});

/* =========================================
HEADER SCROLL
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 120){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});