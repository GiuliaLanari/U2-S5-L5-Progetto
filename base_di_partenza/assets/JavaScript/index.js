/*
const menu = document.querySelector(".menù");
const bottone = document.querySelector(".btn-menù")

window.addEventListener.menu("scroll", cambioColoreMenu () {
  document.getElementById("showScroll").innerHTML = window.pageY0ffset +"px";
console.log(showScroll)
});
}
const cambioColoreMenu = ()=> {
  if (scrollY=== 10px) {
     menu.style.backgraundColor = "white";
  bottone.style.backgraundColor = "#1a8917";
  }
}
*/

let posizioneScroll = 0;
let menu = document.querySelector(".menù");
const bottone = document.querySelector(".btn-menù");

const cambioColoriMenu = function (scroll) {
  menu.style.backgraundColor = "white";
  bottone.style.backgraundColor = "#1a8917";

  document.addEventListener("scroll", (event) => {
    posizioneScroll = window.scrollY;

    if (posizioneScroll !== 0) {
      window.requestAnimationFrame(() => {
        cambioColoriMenu(posizioneScroll);
      });
    }
  });
};

cambioColoriMenu();
