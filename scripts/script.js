const navbar = document.querySelector('.navbar');

if (navbar) {
  const sticky = navbar.offsetTop;

  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  window.addEventListener('scroll', stickyNavbar);
}






function drop(parentSelector, subSelector, activeClass) {
   document.addEventListener('click', (event) => {
     const drop = event.target.closest(parentSelector);
 
     if (drop) {
       const sub = drop.querySelector(subSelector);
 
       if (sub) {
         sub.classList.toggle(activeClass);
       }
     }
   });
 }
 
 drop('.dropdown', '.dropdown__sub', 'dropdown__sub__active');
 drop('.navbar__controlls__lang', '.navbar__controlls__lang__sub', 'navbar__controlls__lang__sub__active');
 



 const searchIcon = document.querySelector('.navbar__controlls__search');
 const searchBlock = document.querySelector('.navbar__search__block');
 const exitIcon = searchBlock.querySelector('.navbar__search__block__exit');
 
 if (searchIcon && searchBlock && exitIcon) {
   function showSearch() {
     searchBlock.classList.add('navbar__search__block__active');
     document.querySelector('.navbar__links').style.display = 'none';
     searchIcon.style.display = 'none';
     document.querySelector('.navbar__controlls__lang').style.display = 'none';
   }
 
   function hideSearch() {
     searchBlock.classList.remove('navbar__search__block__active');
     searchIcon.style.display = 'block';
 
     if (window.innerWidth > 992) {
       document.querySelector('.navbar__links').style.display = 'block';
       document.querySelector('.navbar__controlls__lang').style.display = 'flex';
     }
   }
 
   searchIcon.addEventListener('click', showSearch);
   exitIcon.addEventListener('click', hideSearch);
 }
 





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


const imagesObj = [   {      id: 1,      src: "../assets/images/magazine/mc-3-2022-sayt_page-0004 1.png"   },   {      id: 2,      src: "../assets/images/magazine/mc-3-2022-sayt_page-0004 1 (1).png"   },   {      id: 3,      src: "../assets/images/magazine/mc-3-2022-sayt_page-0005 1.png"   }];

const imagesAr = [   {      id: 1,      src: "../assets/images/articles/mc-3-2022-sayt_page-0004 1.png"   },   {      id: 2,      src: "../assets/images/articles/mc-3-2022-sayt_page-0005 1.png"   }];

const img1 = document.querySelector(".magazinee img");
const img2 = document.querySelector(".article img");

function caruselMag(images, img) {
   const buttonRight = document.querySelector(".mag__right");
   const buttonLeft = document.querySelector(".mag__left");
   const magazinePageBox = document.querySelector('.magazine__sliderPage__box');

   if (!img || !buttonRight || !buttonLeft || !magazinePageBox) {
    
      return;
   }

   let count = 1;
   
   function sliderMovie() {
      if (window.innerWidth > 600) {
         if (count < images.length) {
            buttonRight.style.display = "block";
         } else {
            buttonRight.style.display = "none";
         }
         if (count > 1) {
            buttonLeft.style.display = "block";
         } else {
            buttonLeft.style.display = "none";
         }
      }
   }
   
   sliderMovie();
   
   function currentSlider() {
      document.querySelector(".magazine__pag__current").textContent = count;
      document.querySelector(".magazine__pag__all").textContent = images.length;
   }
   
   currentSlider();
   
   buttonRight.addEventListener("click", () => {
      count++;
      currentSlider();
      sliderMovie();
      img.src = images[count-1].src;
   });
   
   buttonLeft.addEventListener("click", () => {
      count--;
      currentSlider();
      sliderMovie();
      img.src = images[count-1].src;
   });
   
   const hammer = new Hammer(magazinePageBox);
   
   hammer.on('swipeleft', function(event) {
      if (count < images.length) {
         count++;
         currentSlider();
         img.src = images[count-1].src;
      }
   });
   
   hammer.on('swiperight', function(event) {
      if (count > 1) {
         count--;
         currentSlider();
         img.src = images[count-1].src;
      }
   });
}

caruselMag(imagesObj, img1);
caruselMag(imagesAr, img2);


function openMenu(openTrigger, menuSelector, closeSelector, activeClass) {
   const btn = document.querySelector(openTrigger),
         menu = document.querySelector(menuSelector),
         close = document.querySelector(closeSelector);
   
   btn.addEventListener("click", () => {
      menu.classList.add(activeClass);
      document.body.style.overflow = "hidden"
   })
   close.addEventListener("click", () => {
      menu.classList.remove(activeClass);
      document.body.style.overflow = "auto"
   })
}

openMenu(".navbar__hamburger", ".mini__menu", ".mini__menu i", "mini__menu__active");



const mini__dropdown__link = document.querySelector(".mini__dropdown__link");
const mini__ropdown__sub = document.querySelector(".mini__ropdown__sub");

mini__dropdown__link.addEventListener("click", () => {
   mini__ropdown__sub.classList.toggle("mini__ropdown__sub__active")
})

const magazine__image = document.querySelectorAll(".magazine__image");
const magazine__desc__bottom__read = document.querySelectorAll(".magazine__desc__bottom__read>div");
if(magazine__image) {
   magazine__image.forEach(element => {
      element.addEventListener("click", () => {
         window.location.href = "magazine.html"
      })
   })
}
if(magazine__desc__bottom__read) {
   magazine__desc__bottom__read.forEach(element => {
      element.addEventListener("click", () => {
         window.location.href = "article.html"
      })
   })
}



function goToSearch(formSelector) {
   const form = document.querySelector(formSelector);
   if(form) {
      form.addEventListener("submit", (e) => {
         e.preventDefault();
         window.location.href = "searchResults.html"
      })
   }
}
goToSearch(".searchResults form");
goToSearch(".navbar__search__block form");


const magBot = document.querySelector(".header");
const btn = document.querySelector(".header__body__left__toBottom");

if(magBot && btn) {
   btn.addEventListener("click", () => {
      const top = magBot.clientHeight + 230;
      window.scroll({
        top: top,
        behavior: 'smooth'
      });
    });
}
