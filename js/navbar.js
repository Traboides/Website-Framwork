// Toggle menu for mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

// Close nav-toggle when screen size changes
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("open");
    }
});

// Close nav-toggle when a link is clicked
const navLinkItems = document.querySelectorAll(".nav-links a");
navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
        }
    });
});
