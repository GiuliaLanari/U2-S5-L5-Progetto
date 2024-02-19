const menu = document.querySelector(".menù");
const bottone = document.querySelector(".get-started");

function cambioColore() {
  console.log(window.scrollY);
  const scrollY = window.scrollY;

  if (scrollY >= 300) {
    menu.style.backgroundColor = "white";
    bottone.style.backgroundColor = "#1a8917";
  } else {
    menu.style.backgroundColor = "#ffc017";
    bottone.style.backgroundColor = "black";
  }
}

window.addEventListener("scroll", cambioColore);
