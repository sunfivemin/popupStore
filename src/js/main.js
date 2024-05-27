document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        offset: 120, // 애니메이션 시작 위치 조정
        delay: 0, // 애니메이션 시작 지연 시간
        duration: 400, // 애니메이션 지속 시간
        easing: 'ease', // 애니메이션 동작 방식
        once: true, // 한 번만 애니메이션 실행 여부
    });
});