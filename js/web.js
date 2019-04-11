/* Burger menu */
const menuToggler = document.querySelector(".menu-toggler");
const menuMenu = document.querySelector(".menu ul");
const menuLinks = document.querySelectorAll(".menu a");

menuToggler.addEventListener("click", menuTogglerClick);

function menuTogglerClick() {
  menuToggler.classList.toggle("open-menu-toggler");
  menuMenu.classList.toggle("open");
}

menuLinks.forEach(elem => elem.addEventListener("click", menuLinkClick));

function menuLinkClick() {
  if(menuMenu.classList.contains("open")) {
    menuToggler.click();
  }
}
/* END BURGER MENU */



/*TEXT ANIMATION*/
