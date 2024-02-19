const menu = document.querySelector(".menù");
const bottone = document.querySelector(".btn-menù");

window.onscroll = function (e) {
  console.log(window.scrollY);
  const scrollY = window.screenY;

  if (scrollY >= 300) {
    menu.classList.add("scrolled");
    bottone.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
    bottone.classList.remove("scrolled");
  }
};
/*
window.addEventListener("scroll", function () {
  const menu = document.querySelector(".menù");
  const bottone = document.querySelector(".btn-menù");
  const altazzaCambio = document.querySelector(".startReading");
  const altezzaPunto = height.getBoundingClientRect().top;
  const menuAltezza = menu.offsetHeight;

  if (altezzaPunto < menuAltezza) {
    menu.classList.add("scrolled");
    bottone.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
    bottone.classList.remove("scrolled");
  }
});
*/
