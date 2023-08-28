let $ = document;
let closeMobileNavBtn = $.querySelector(".header__mobile-btn");
let hamburgerMenuBtn = $.querySelector(".hamburger-menu"); 
let headerNavMobile = $.querySelector(".header-nav__mobile");
let questionHiddenBx = $.querySelectorAll(".question__hidden-box");
let questionListItem = $.querySelectorAll(".question__list-item");

hamburgerMenuBtn.addEventListener("click",() => {
   headerNavMobile.classList.add("open");
});

closeMobileNavBtn.addEventListener("click",() => {
    headerNavMobile.classList.remove("open");
});

// AOS 
AOS.init();

// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },

    autoplay: {
        delay: 3000,
     },
  });
//   End

questionListItem.forEach(function(item){
    item.addEventListener("click",function(){
      this.classList.toggle("active");
    });
});



