import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {

    var splideGame = new Splide('.splide-game', {
        perPage: 3,
        type: 'loop',
        focus: 'center',
        gap: '2rem',
        
        pagination: false,
        lazyLoad: 'nearby',
        breakpoints: {
            768: {
                padding: '30%',
                perPage: 1,
            },
            576: {
                perPage: 1,
                padding: '25%',
            },
        },
    });

    splideGame.mount();
});