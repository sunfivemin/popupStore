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

    // 카카오 지도
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.5551017281586, 126.922123966823), // 지도의 중심좌표
            level: 4, // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(37.5551017281586, 126.922123966823); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
});
