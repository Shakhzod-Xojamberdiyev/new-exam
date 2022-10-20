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
    $('.carouselll').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // prevArrow: "<span><img src='./images/slick-btn-left' alt=''></span>",
        // nextArrow: "<span><img src='./images/slick-btn-right' alt=''></span>",
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
           
           
            {
                breakpoint: 1200,
                settings: {
                    autoplay:true,
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
// $('.carouselll').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });