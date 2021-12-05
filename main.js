window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// const menuBtn = document.querySelector(".menu-btn");
// let menuOpen = false;
// menuBtn.addEventListener("click", () => {
//   if (!menuOpen) {
//     menuBtn.classList.add("open");
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove("open");
//     menuOpen = false;
//   }
// });

// const btn = document.getElementById("menu-btn");
// const menu = document.getElementById("mobile-menu");

// function navToggle() {
//   menu.classList.toggle("mobile-menu-visible");
//   btn.classList.toggle("open");
// }

// function btnToggle() {
//   var btn = document.getElementById("menu-btn");
//   btn.classList.toggle("open");
// }

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("mobile-menu-visible");
}

btn.addEventListener("click", navToggle);
menu.addEventListener("click", navToggle);
