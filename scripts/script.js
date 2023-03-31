window.onscroll = function() {stickyNavbar()};

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}





function drop(dropSel, downSel, active) {
   const drop = document.querySelector(dropSel),
         down = document.querySelector(downSel);
         drop.addEventListener("click",(e) => {
            down.classList.toggle(active)
   });
}

drop(".dropdown", ".dropdown__sub", "dropdown__sub__active");
drop(".navbar__controlls__lang", ".navbar__controlls__lang__sub", "navbar__controlls__lang__sub__active")



const searchIcon = document.querySelector(".navbar__controlls__search");
const exitIcon = document.querySelector(".navbar__search__block__exit");
searchIcon.addEventListener("click", (e) => {
   const search = document.querySelector(".navbar__search__block");
   search.classList.add("navbar__search__block__active");
   document.querySelector(".navbar__links").style.display="none"
   document.querySelector(".navbar__controlls__search").style.display="none"
   document.querySelector(".navbar__controlls__lang").style.display="none"

});

exitIcon.addEventListener("click", (e) => {
   const search = document.querySelector(".navbar__search__block");
   search.classList.remove("navbar__search__block__active");
   document.querySelector(".navbar__controlls__search").style.display="block"

   if(window.innerWidth>992) {
      document.querySelector(".navbar__links").style.display="block"
     
      document.querySelector(".navbar__controlls__lang").style.display="flex"
   }
});