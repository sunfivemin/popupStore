document.addEventListener("DOMContentLoaded", function (event) {
    AOS.init({
        offset: 120, // 애니메이션 시작 위치 조정
        delay: 0, // 애니메이션 시작 지연 시간
        duration: 400, // 애니메이션 지속 시간
        easing: "ease", // 애니메이션 동작 방식
        once: true, // 한 번만 애니메이션 실행 여부
    });

    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(".box", {
    //     rotation: 360,
    //     duration: 2,
    //     scrollTrigger: {
    //         trigger: '.box',
    //         markers: true,
    //         scrub: true
    //     }
    // })
});

$(function () {
    // Initialize Swiper
    // var mainSwiper = new Swiper(".main-swiper", {
    //     autoplay: { delay: 4000, disableOnInteraction: false },
    //     speed: 800,
    //     loop: true,
    //     effect: "creative",
    //     creativeEffect: { prev: { translate: [0, 0, -400] }, next: { translate: ["100%", 0, 0] } },
    //     navigation: { nextEl: ".main-slide .swiper-button-next", prevEl: ".main-slide .swiper-button-prev" },
    //     pagination: {
    //         el: ".main-slide .swiper-pagination",
    //         type: "fraction",
    //         clickable: true,
    //         formatFractionCurrent: function (number) {
    //             return ("0" + number).slice(-2);
    //         },
    //         formatFractionTotal: function (number) {
    //             return ("0" + number).slice(-2);
    //         },
    //     },
    // });

    // // Sync text box with Swiper slide
    // mainSwiper.on("slideChange", function () {
    //     var currentIndex = mainSwiper.realIndex + 1;
    //     $(".text-box").removeClass("on");
    //     $(".text-box[data-slide='" + currentIndex + "']").addClass("on");
    // });

    var mySwiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        // pagination: {
        //     el: ".main-slide .swiper-pagination",
        //     clickable: true,
        // },
        navigation: {
            nextEl: ".circle-button.swiper-button-next",
            prevEl: ".circle-button.swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
    });
});
