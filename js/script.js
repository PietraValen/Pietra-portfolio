let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
    menu.classList.toggle("move");
};

// Reviews Swiper

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});