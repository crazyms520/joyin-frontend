import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
    var splideRecommendation = new Splide('.splide-recommendation', {
        perPage: 3,
        type: 'loop',
        focus: 'center',
        // gap: '-2rem',
        // padding: '3rem',
        // trimSpace: true
        // rewind: true,

        pagination: false,
        // lazyLoad: 'nearby',

        
        breakpoints: {
            768: {
                perPage: 1,
                // gap: '0.5rem',
            },
            576: {
                perPage: 1,
                gap: '0.5rem',
                // padding: '15%',
            },
        },
    });

    splideRecommendation.mount();
});