const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("mobile-menu-visible");
}

btn.addEventListener("click", navToggle);
menu.addEventListener("click", navToggle);
