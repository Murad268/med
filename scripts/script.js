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





$('.footer__carusel').slick({
	infinite: true,
	slidesToShow: 4,
	centerMode: false,
	slidesToScroll: 1,
	dots: false,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1120,
			settings: {
				slidesToShow: 3,
			},
		},
      {
			breakpoint: 882,
			settings: {
				slidesToShow: 2,
			},
		},
      {
			breakpoint: 360,
			settings: {
				slidesToShow: 1,
			},
		},
	],
})


const imagesObj = [
   {
      id: 1,
      src: "../assets/images/magazine/mc-3-2022-sayt_page-0004 1.png"
   },
   {
      id: 2,
      src: "../assets/images/magazine/mc-3-2022-sayt_page-0004 1 (1).png"
   },
   {
      id: 3,
      src: "../assets/images/magazine/mc-3-2022-sayt_page-0005 1.png"
   }
]

const imagesAr = [
   {
      id: 1,
      src: "../assets/images/articles/mc-3-2022-sayt_page-0004 1.png"
   },
   {
      id: 2,
      src: "../assets/images/articles/mc-3-2022-sayt_page-0005 1.png"
   }
]
const img1 = document.querySelector(".magazinee img");
const img2 = document.querySelector(".article img");
function caruselMag(images, img) {
   const buttonRight = document.querySelector(".mag__right");
   const buttonLeft = document.querySelector(".mag__left");
   
   let count = 1;
   
   
      function sliderMovie() {
        if(window.innerWidth>600) {
            if(count<images.length) {
               buttonRight.style.display="block";
            } else {
               buttonRight.style.display="none";
            }
            if(count>1) {
               buttonLeft.style.display="block";
            } else {
               buttonLeft.style.display="none";
            }
        }
      }
      sliderMovie();
   
   
   
   function currentSlider() {
      document.querySelector(".magazine__pag__current").textContent = count;
      document.querySelector(".magazine__pag__all").textContent = images.length;
   }
   currentSlider()
   buttonRight.addEventListener("click", () => {
      count++;
      currentSlider()
      console.log(count)
      sliderMovie()
      img.src = images[count-1].src
   });
   
   buttonLeft.addEventListener("click", () => {
      count--;
      currentSlider()
      sliderMovie()
      img.src = images[count-1].src
   });
   
   
   const myElement = document.querySelector('.magazine__sliderPage__box');
   const hammer = new Hammer(myElement);
   hammer.on('swipeleft', function(event) {
      if(count<images.length) {
         count++;
         currentSlider()
         img.src = images[count-1].src
      }
     
   });
   hammer.on('swiperight', function(event) {
      if(count>1) {
         console.log(count)
         count--;
         currentSlider()
         img.src = images[count-1].src
      }
   });
   
}

caruselMag(imagesObj, img1)
caruselMag(imagesAr, img2)