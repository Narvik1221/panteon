let btn = document.querySelector(".header__btn");
let headerInner = document.querySelector(".header__inner");
let header = document.querySelector(".header");
let panteon= document.querySelector(".panteon");
btn.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  header.classList.toggle("active");
  headerInner.classList.toggle("active");
  panteon.classList.toggle("active");
});
