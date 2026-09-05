const menuToggle = document.getElementById("menuToggle");

const nav = document.querySelector("nav");


/* =========================
   MOBILE MENU
========================= */

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});