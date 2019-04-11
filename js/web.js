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
function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}