    document.addEventListener('DOMContentLoaded', function() {
        AOS.init({
            offset: 120, // 애니메이션 시작 위치 조정
            delay: 0, // 애니메이션 시작 지연 시간
            duration: 400, // 애니메이션 지속 시간
            easing: 'ease', // 애니메이션 동작 방식
            once: true, // 한 번만 애니메이션 실행 여부
        });
    });
    $(function () {
        // Initialize Swiper
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
                }
            }
        });
    
        // Sync text box with Swiper slide
        mainSwiper.on("slideChange", function () {
            var currentIndex = mainSwiper.realIndex + 1;
            $(".text-box").removeClass("on");
            $(".text-box[data-slide='" + currentIndex + "']").addClass("on");
        });
    
        // Initial setting
        $(".text-box[data-slide='1']").addClass("on");
    
        // Function to adjust the width of news slide
        function adjustNewsSlideWidth() {
            var newsText = $(".news-text");
            if (newsText.length === 0) {
                console.error("Element .news-text not found");
                return;
            }
            var leftOffset = newsText.offset().left + 320,
                availableWidth = $(window).width() - leftOffset;
            $("#main .news-slide").css("width", availableWidth + "px");
        }
    
        $(window).resize(adjustNewsSlideWidth);
        adjustNewsSlideWidth();
    
        // Function to load images for mobile/desktop
        function loadResponsiveImages() {
            let images = $(".main-slide-img");
            if (!images[0].hasAttribute("data-src")) return false;
            if (window.innerWidth <= 1200 && !$(images[0]).hasClass("mb")) {
                images.each(function () {
                    var tempSrc = this.src;
                    this.src = this.getAttribute("data-src");
                    this.setAttribute("data-src", tempSrc);
                    $(this).addClass("mb");
                });
            } else if (window.innerWidth > 1200 && $(images[0]).hasClass("mb")) {
                images.each(function () {
                    var tempSrc = this.src;
                    this.src = this.getAttribute("data-src");
                    this.setAttribute("data-src", tempSrc);
                    $(this).removeClass("mb");
                });
            }
        }
    
        loadResponsiveImages();
        $(window).resize(loadResponsiveImages);
    });
    