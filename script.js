const btnMenu = document.querySelector(".btn-menu");
const primaryNavigation = document.querySelector(".primary-navigation");
console.log(btnMenu);

function toggleMenu() {
  btnMenu.classList.toggle("close");
  primaryNavigation.classList.toggle("close");
}

btnMenu.addEventListener("click", toggleMenu);
