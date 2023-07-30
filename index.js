   // JavaScript function to toggle the visibility of the dropdown content
   function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

  
var swiper = new Swiper(".mySwiper", {
slidesPerView: 3,

pagination: {
el: ".swiper-pagination",
clickable: true,
},
navigation: {
nextEl :".swiper-button-next",
prevEl:".swiper-button-prev",
},
breakpoints: {
320: {
  slidesPerView:1,
  

},
640: {
  slidesPerView: 2,

},
768: {
  slidesPerView: 4,

},
1024: {
  slidesPerView: 5,

},
},
});

const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');

toggle.addEventListener('click' , () =>{
body.classList.toggle('open');
})