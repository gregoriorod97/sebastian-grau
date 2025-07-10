// Loader
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".loader").classList.add("hidden");
  }, 1000);
});

// Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Navbar scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Funciones del Modal del Portfolio
function openPortfolioModal() {
  const modal = document.getElementById("portfolioModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePortfolioModal() {
  const modal = document.getElementById("portfolioModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Cerrar modal al hacer clic fuera
document
  .getElementById("portfolioModal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closePortfolioModal();
    }
  });

// Cerrar modal con tecla Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePortfolioModal();
  }
});

// Prevenir que el modal se cierre al hacer clic en el contenido
document
  .querySelector(".modal-content")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });
