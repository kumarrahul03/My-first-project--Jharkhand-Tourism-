let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
   searchForm.classList.toggle('active'); 
   travallingcart.classList.remove('active');
   loginform.classList.remove('active');  
   navbar.classList.remove('active'); 
}

let travallingcart = document.querySelector('.travalling-cart');

document.querySelector('#plane-btn').onclick = () =>
{
   travallingcart.classList.toggle('active'); 
   searchForm.classList.remove('active'); 
   loginform.classList.remove('active');  
   navbar.classList.remove('active'); 
}


let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
   loginform.classList.toggle('active');
   travallingcart.classList.remove('active'); 
   searchForm.classList.remove('active'); 
   navbar.classList.remove('active');  
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
   navbar.classList.toggle('active'); 
   loginform.classList.remove('active');
   travallingcart.classList.remove('active'); 
   searchForm.classList.remove('active'); 
}

window.onscroll = () =>
{
   searchForm.classList.remove('active');
   travallingcart.classList.remove('active');
   loginform.classList.remove('active');  
   navbar.classList.remove('active'); 
}

var swiper = new Swiper(".product-slider", {
   loop:true,
   spaceBetween: 20,

   autoplay: {
      delay: 7500,
      disaleOnInteraction: false,
   },

   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
 });





 var swiper = new Swiper(".review-slider", {
   loop:true,
   spaceBetween: 20,

   autoplay: {
      delay: 7500,
      disaleOnInteraction: false,
   },

   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
 });












   
