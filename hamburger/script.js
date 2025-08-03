// const menu = document.querySelector(".menu");
// const openMenuBtn = document.querySelector(".open-menu-btn");
// const openCloseBtn = document.querySelector(".close-menu-btn");

   
// [openCloseBtn, openCloseBtn].forEach((btn) => {
//   btn.addEventListener("click", () => {
//   menu.classList.toggle("open");
//   menu.style.transition = "transform 0.5s ease";
// });

// });

//  menu.addEventListener("transitionend", function(){
//  this.removeAttribute("style");

// });

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menu.style.transition = "transform 0.5s ease";
  });
});

menu.addEventListener("transitionend", function () {
  this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((Array) => {
    Array.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});