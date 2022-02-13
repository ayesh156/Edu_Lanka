
/* ------------ Toggle Menu ------------ */

var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

/* ------------ Testimonial Swiper ------------ */
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        700: {
            slidesPerView: 3,
        },
        
    },
});