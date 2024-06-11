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

    var mainSwiper = new Swiper(".main-swiper", {
        autoplay: { delay: 4000, disableOnInteraction: false },
        speed: 800,
        loop: true,
        effect: "creative",
        creativeEffect: { prev: { translate: [0, 0, -400] }, next: { translate: ["100%", 0, 0] } },
        navigation: { nextEl: ".main-slide .swiper-button-next", prevEl: ".main-slide .swiper-button-prev" },
        pagination: {
            el: ".main-slide .swiper-pagination",
            type: "fraction",
            clickable: true,
            formatFractionCurrent: function (number) {
                return ("0" + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ("0" + number).slice(-2);
            },
        },
    });

    // Sync text box with Swiper slide
    mainSwiper.on("slideChange", function () {
        var currentIndex = mainSwiper.realIndex + 1;
        $(".text-box").removeClass("on");
        $(".text-box[data-slide='" + currentIndex + "']").addClass("on");
    });

    var mySwiper = new Swiper(".mySwiper", {
        slidesPerView: 1.5, // 5개의 슬라이드를 한 줄에 보이도록 설정
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".main-slide .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".circle-button.swiper-button-next",
            prevEl: ".circle-button.swiper-button-prev",
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 3.5,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3.8,
                spaceBetween: 10,
            },
        },
        observer: true, 
        observeParents: true,
        on: {
            init: function() {
                updateDimmedSlides(this);
            },
            slideChange: function() {
                updateDimmedSlides(this);
            }
        }

    });

    function updateDimmedSlides(swiper) {
        // 모든 슬라이드에서 'dimmed' 클래스를 제거
        swiper.slides.forEach(function(slide) {
            slide.classList.remove('dimmed');
        });
    
        // 현재 슬라이드의 인덱스를 가져옴
        var activeIndex = swiper.activeIndex;
    
        // DIM 처리할 슬라이드의 인덱스를 계산
        var prevIndex1 = (activeIndex - 2 + swiper.slides.length) % swiper.slides.length;
        var prevIndex2 = (activeIndex - 1 + swiper.slides.length) % swiper.slides.length;
        var nextIndex1 = (activeIndex + 1) % swiper.slides.length;
        var nextIndex2 = (activeIndex + 2) % swiper.slides.length;
    
        // 중앙의 3개 슬라이드를 제외하고 나머지 슬라이드에 'dimmed' 클래스 추가
        swiper.slides[prevIndex1].classList.add('dimmed');
        swiper.slides[prevIndex2].classList.remove('dimmed');
        swiper.slides[activeIndex].classList.remove('dimmed');
        swiper.slides[nextIndex1].classList.remove('dimmed');
        swiper.slides[nextIndex2].classList.add('dimmed');
    }
    // 카카오 지도
    //var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    //    mapOption = {
    //        center: new kakao.maps.LatLng(37.5551017281586, 126.922123966823), // 지도의 중심좌표
    //        level: 4, // 지도의 확대 레벨
    //    };

    //var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    //var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
    //    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    //    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    //var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    //    markerPosition = new kakao.maps.LatLng(37.5551017281586, 126.922123966823); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    //var marker = new kakao.maps.Marker({
    //    position: markerPosition,
    //    image: markerImage, // 마커이미지 설정
    //});

    // 마커가 지도 위에 표시되도록 설정합니다
    //marker.setMap(map);
});

