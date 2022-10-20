var elBurgerBtn = document.querySelector(".header-burger");
var elDarkBtn = document.querySelector(".dark-mode-btn");

elBurgerBtn.addEventListener("click" , function(){
    elBurgerBtn.parentElement.classList.toggle("header-open")
    // elDarkBtn.classList.add("d-none");
});

var elOpenModalBtn = document.querySelector(".modal-video");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".close-btn");

elOpenModalBtn.addEventListener("click" , function(){
    elModal.classList.add("modal-open", "d-block");

});
elCloseModalBtn.addEventListener("click" , function(){
    elModal.classList.remove("modal-open" , "d-block");
});

$(function () {
    $('.carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // prevArrow: "<span><img src='./images/arrow-left.svg' alt='Left arrow'></span>",
        // nextArrow: "<span><img src='./images/arrow-right.svg' alt='Right arrow'></span>",
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow:1,
                }
            }
        ]
      });
});