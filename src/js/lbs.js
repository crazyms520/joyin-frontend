import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
    // 個性化推薦輪播 (Splide)
    var splideRecommendation = new Splide('.splide-recommendation', {
        perPage: 3,
        type: 'loop',
        focus: 'center',
        pagination: false,
        breakpoints: {
            768: {
                perPage: 1,
            },
            576: {
                perPage: 1,
                gap: '0.5rem',
            },
        },
    });

    splideRecommendation.mount();

    const swiperShopping = new Swiper('.swiper-shopping', {
        slidesPerView: 1,       // 每次顯示 1 個 "頁面"
        slidesPerGroup: 1,      // 每次翻頁 1 個
        spaceBetween: 0,
        loop: false,
        rewind: true,
        autoHeight: true,
        mousewheel: {
            enabled: true,
            forceToAxis: false,
            releaseOnEdges: true,
        },

        // 分頁指示器
        pagination: {
            el: '.swiper-shopping .swiper-pagination',
            clickable: true,
        },
    });

    const swiperRestaurant = new Swiper('.swiper-restaurant', {
        slidesPerView: 1,       // 每次顯示 1 個 "頁面"
        slidesPerGroup: 1,      // 每次翻頁 1 個
        spaceBetween: 0,
        loop: false,
        rewind: true,
        autoHeight: true,
        mousewheel: {
            enabled: true,
            forceToAxis: false,
            releaseOnEdges: true,
        },

        // 分頁指示器
        pagination: {
            el: '.swiper-restaurant .swiper-pagination',
            clickable: true,
        },
    });

    const swiperLife = new Swiper('.swiper-life', {
        slidesPerView: 1,       // 每次顯示 1 個 "頁面"
        slidesPerGroup: 1,      // 每次翻頁 1 個
        spaceBetween: 0,
        loop: false,
        rewind: true,
        autoHeight: true,
        mousewheel: {
            enabled: true,
            forceToAxis: false,
            releaseOnEdges: true,
        },

        // 分頁指示器
        pagination: {
            el: '.swiper-life .swiper-pagination',
            clickable: true,
        },
    });

    const swiperPet = new Swiper('.swiper-pet', {
        slidesPerView: 1,       // 每次顯示 1 個 "頁面"
        slidesPerGroup: 1,      // 每次翻頁 1 個
        spaceBetween: 0,
        loop: false,
        rewind: true,
        autoHeight: true,
        mousewheel: {
            enabled: true,
            forceToAxis: false,
            releaseOnEdges: true,
        },

        // 分頁指示器
        pagination: {
            el: '.swiper-pet .swiper-pagination',
            clickable: true,
        },
    });

    // 手機展示輪播 (Swiper)
    const swiperPhone = new Swiper('.swiper-phone', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        mousewheel: {
            enabled: true,
            forceToAxis: true,
            releaseOnEdges: true, // 關鍵：到達邊緣時釋放滾輪控制
            // sensitivity: 1,
        },
        pagination: {
            el: '.swiper-phone .swiper-pagination',
            clickable: true,
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },

        breakpoints: {
            768: {
                direction: 'horizontal',
                mousewheel: {
                    forceToAxis: false,
                }
            },
            576: {
                direction: 'horizontal',
                mousewheel: {
                    forceToAxis: false,
                }
            },
            0: {
                direction: 'horizontal',
                mousewheel: {
                    forceToAxis: false,
                }
            },
        },
    });
});